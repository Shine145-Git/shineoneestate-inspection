import { NextResponse } from 'next/server';
import { inspectionSchema } from '@/lib/validations';
import { prisma } from '@/lib/prisma';
import { sendAdminNotification } from '@/lib/email';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET() {

  return NextResponse.json({

    success: true,

    message: "Server is running",

  });

}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request payload.' },
      { status: 400 }
    );
  }

  // Server-side validation (mirrors the client schema).
  const parsed = inspectionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation failed.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;
  const preferredDateObj = new Date(data.preferredDate);

  try {
    // 1. Persist to PostgreSQL.
    const record = await prisma.inspectionRequest.create({
      data: {
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        propertyLocation: data.propertyLocation,
        preferredDate: preferredDateObj,
        preferredTime: data.preferredTime,
      },
    });

    // 2. Notify the admin by email. A failure here should not lose the lead,
    //    so it is handled independently and logged.
    sendAdminNotification({
  ...data,
  preferredDateObj,
  createdAt: record.createdAt,
}).catch((emailError) => {
  console.error('Inspection saved but admin email failed:', emailError);
});

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    console.error('Failed to save inspection request:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
