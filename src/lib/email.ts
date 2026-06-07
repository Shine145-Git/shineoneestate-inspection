import { Resend } from 'resend';
import type { InspectionInput } from './validations';

const resend = new Resend(process.env.RESEND_API_KEY);

function formatIST(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

function formatDateOnly(value: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(value);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface AdminEmailPayload extends InspectionInput {
  createdAt: Date;
  preferredDateObj: Date;
}

export async function sendAdminNotification(
  payload: AdminEmailPayload
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  if (!adminEmail) {
    throw new Error('ADMIN_EMAIL is not configured.');
  }

  const istTimestamp = formatIST(payload.createdAt);
  const preferredDateLabel = formatDateOnly(payload.preferredDateObj);

  const rows: Array<[string, string]> = [
    ['Name', payload.name],
    ['Mobile', payload.mobile],
    ['Email', payload.email],
    ['Property Location', payload.propertyLocation],
    ['Preferred Date', preferredDateLabel],
    ['Preferred Time', payload.preferredTime],
    ['Submitted (IST)', istTimestamp],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;color:#0C0F1A;">
          ${escapeHtml(label)}
        </td>
        <td style="padding:10px 16px;border-bottom:1px solid #eee;color:#333;">
          ${escapeHtml(value)}
        </td>
      </tr>`
    )
    .join('');

  const htmlBody = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#F5F0E8;padding:24px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e6ddca;">
      
      <div style="background:#0C0F1A;padding:20px 24px;">
        <p style="margin:0;color:#C9A84C;letter-spacing:2px;font-size:12px;text-transform:uppercase;">
          ShineOne Estate
        </p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:18px;">
          New Inspection Request
        </h1>
      </div>

      <table style="width:100%;border-collapse:collapse;">
        ${tableRows}
      </table>

      <div style="padding:16px 24px;background:#F5F0E8;color:#555;font-size:12px;">
        This is an automated notification from the ShineOne Estate booking system.
      </div>

    </div>
  </div>`;

  console.log('===================================');
  console.log('Sending inspection email');
  console.log('To:', adminEmail);
  console.log('From: noreply@shineoneestate.co.in');
  console.log('===================================');

  const { data, error } = await resend.emails.send({
    from: 'ShineOne Estate <noreply@shineoneestate.co.in>',
    to: [adminEmail],
    replyTo: payload.email,
    subject: `New Inspection Request — ${payload.name}`,
    html: htmlBody,
  });

  console.log('Resend response:', { data, error });

  if (error) {
    console.error('Resend Error:', error);
    throw new Error(error.message);
  }

  console.log('Email sent successfully!');
  console.log('Email ID:', data?.id);
}
