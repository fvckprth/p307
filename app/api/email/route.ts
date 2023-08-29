import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WaitlistEmail from '@/emails/waitlist';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email } = await request.json();
    await resend.sendEmail({
    from: 'welcome@p307.net',
    to: email,
    subject: 'P307 - Welcome to the waitlist',
    react: WaitlistEmail({
        name,
        email,
    })
});


return NextResponse.json({
    status: 'Ok',
    })
}
