import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, phone, company, service, message } = data

    const response = await fetch('https://api.vercel.com/v1/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.VERCEL_EMAIL_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Kardinal Valet Website <onboarding@resend.dev>',
        to: 'hussiahmed.ahmed@gmail.com',
        subject: 'New Consultation Request',
        text: `New Consultation Request:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service: ${service}
Message: ${message}`,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending consultation email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
} 