import nodemailer from 'nodemailer';
import type { InspectionInput } from './validations';

// Build the SMTP transport from environment variables only — never hardcode.
function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is missing. Check SMTP_HOST, SMTP_USER, SMTP_PASS.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587/STARTTLS
    auth: { user, pass },
  });
}

// Format a timestamp in IST (Asia/Kolkata) for the notification email.
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

export async function sendAdminNotification(payload: AdminEmailPayload): Promise<void> {
  const transport = getTransport();
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    throw new Error('ADMIN_EMAIL is not configured.');
  }

  const subject = `New Inspection Request — ${payload.name} — ${payload.propertyLocation}`;
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

  const textBody = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;color:#0C0F1A;">${escapeHtml(
          label
        )}</td>
        <td style="padding:10px 16px;border-bottom:1px solid #eee;color:#333;">${escapeHtml(
          value
        )}</td>
      </tr>`
    )
    .join('');

  const htmlBody = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#F5F0E8;padding:24px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e6ddca;">
      <div style="background:#0C0F1A;padding:20px 24px;">
        <p style="margin:0;color:#C9A84C;letter-spacing:2px;font-size:12px;text-transform:uppercase;">ShineOne Estate</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:18px;">New Inspection Request</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${tableRows}
      </table>
      <div style="padding:16px 24px;background:#F5F0E8;color:#555;font-size:12px;">
        This is an automated notification from the ShineOne Estate booking system.
      </div>
    </div>
  </div>`;

  await transport.sendMail({
    from: `"ShineOne Estate Bookings" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    replyTo: payload.email,
    subject,
    text: textBody,
    html: htmlBody,
  });
}
