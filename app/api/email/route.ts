import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WaitlistEmail from '@/emails/waitlist';

const resendAPIKey = process.env.RESEND_API_KEY;
if (!resendAPIKey) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(resendAPIKey);
export async function POST(request: Request) {
    const { name, email, details } = await request.json();
    await resend.sendEmail({
    from: 'Platform 307 <notifications@p307.net>',
    to: email,
    subject: 'Welcome to the waitlist',
    react: WaitlistEmail({
        name,
        email,
        details,
    })
});


return NextResponse.json({
    status: 'Ok',
    })
}
