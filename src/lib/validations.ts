import { z } from 'zod';

// Indian 10-digit mobile: starts 6-9, followed by 9 digits.
const indianMobileRegex = /^[6-9]\d{9}$/;

export const inspectionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your full name (at least 2 characters).' })
    .max(80, { message: 'Name is too long.' }),

  mobile: z
    .string()
    .trim()
    .regex(indianMobileRegex, {
      message: 'Enter a valid 10-digit Indian mobile number.',
    }),

  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Enter a valid email address.' })
    .max(120, { message: 'Email is too long.' }),

  propertyLocation: z
    .string()
    .trim()
    .min(5, { message: 'Please enter the property location (at least 5 characters).' })
    .max(160, { message: 'Property location is too long.' }),

  preferredDate: z
    .string()
    .min(1, { message: 'Please choose a preferred date.' })
    .refine(
      (value) => {
        const selected = new Date(value);
        if (Number.isNaN(selected.getTime())) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        selected.setHours(0, 0, 0, 0);
        return selected.getTime() > today.getTime();
      },
      { message: 'Preferred date must be in the future.' }
    ),

  preferredTime: z
    .string()
    .min(1, { message: 'Please choose a preferred time slot.' }),
});

export type InspectionInput = z.infer<typeof inspectionSchema>;
