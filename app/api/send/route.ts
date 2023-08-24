
import React from 'react';
import { NextResponse } from 'next/server';
import { Email } from '@/emails/test';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'parth@qortor.com',
  subject: 'Hello World',
  react: <Email firstName="John" product="MyApp" />,
});