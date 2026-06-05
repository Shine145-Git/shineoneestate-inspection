'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { inspectionSchema, type InspectionInput } from '@/lib/validations';

const timeSlots = [
  '09:00 AM – 11:00 AM',
  '11:00 AM – 01:00 PM',
  '01:00 PM – 03:00 PM',
  '03:00 PM – 05:00 PM',
  '05:00 PM – 07:00 PM',
];

// Minimum selectable date = tomorrow (future only).
function tomorrowISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

type Toast = { type: 'success' | 'error'; message: string } | null;

export default function BookingForm() {
  const router = useRouter();
  const [toast, setToast] = useState<Toast>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InspectionInput>({
    resolver: zodResolver(inspectionSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: InspectionInput) => {
    setToast(null);
    try {
      const res = await fetch('/api/inspection/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.message ?? 'Submission failed.');
      }

      setToast({ type: 'success', message: 'Request submitted successfully.' });
      // Brief delay so the success toast is perceptible, then redirect.
      setTimeout(() => router.push('/thank-you'), 600);
    } catch (err) {
      setToast({
        type: 'error',
        message:
          err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      });
    }
  };

  const fieldClass =
    'w-full rounded-lg border border-shine-gold/30 bg-white px-4 py-3 font-body text-shine-navy placeholder:text-shine-navy/40 focus:border-shine-gold focus:outline-none focus:ring-2 focus:ring-shine-gold/40';
  const labelClass =
    'mb-1.5 block font-accent text-xs font-600 uppercase tracking-wider text-shine-navy';
  const errorClass = 'mt-1 flex items-center gap-1 font-body text-xs text-red-600';

  return (
    <div>
      {/* Live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {toast?.message}
      </div>

      {toast && (
        <div
          role={toast.type === 'error' ? 'alert' : 'status'}
          className={`mb-6 flex items-center gap-2 rounded-lg px-4 py-3 font-body text-sm ${
            toast.type === 'success'
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          ) : (
            <AlertCircle className="h-5 w-5" aria-hidden="true" />
          )}
          {toast.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={fieldClass}
            placeholder="Your full name"
            {...register('name')}
          />
          {errors.name && (
            <p className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mobile" className={labelClass}>Mobile Number</label>
          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={10}
            aria-invalid={!!errors.mobile}
            className={fieldClass}
            placeholder="10-digit mobile"
            {...register('mobile')}
          />
          {errors.mobile && (
            <p className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={fieldClass}
            placeholder="you@example.com"
            {...register('email')}
          />
          {errors.email && (
            <p className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="propertyLocation" className={labelClass}>Property Location</label>
          <input
            id="propertyLocation"
            type="text"
            autoComplete="street-address"
            aria-invalid={!!errors.propertyLocation}
            className={fieldClass}
            placeholder="Project / society, sector, city"
            {...register('propertyLocation')}
          />
          {errors.propertyLocation && (
            <p className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.propertyLocation.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredDate" className={labelClass}>Preferred Date</label>
          <input
            id="preferredDate"
            type="date"
            min={tomorrowISO()}
            aria-invalid={!!errors.preferredDate}
            className={fieldClass}
            {...register('preferredDate')}
          />
          {errors.preferredDate && (
            <p className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.preferredDate.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className={labelClass}>Preferred Time</label>
          <select
            id="preferredTime"
            defaultValue=""
            aria-invalid={!!errors.preferredTime}
            className={fieldClass}
            {...register('preferredTime')}
          >
            <option value="" disabled>Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className={errorClass}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.preferredTime.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <p className="mb-5 rounded-lg bg-shine-cream px-4 py-3 font-body text-xs leading-relaxed text-shine-navy/70">
            Pricing is discussed based on property type, size, and inspection
            requirements. Our team will contact you to confirm the details.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-shine-navy px-8 py-4 font-accent text-sm font-700 uppercase tracking-wide text-shine-cream transition-all hover:bg-shine-blue disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shine-gold focus-visible:ring-offset-2"
          >
            {isSubmitting && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
            {isSubmitting ? 'Submitting…' : 'Submit Inspection Request'}
          </button>
        </div>
      </form>
    </div>
  );
}
