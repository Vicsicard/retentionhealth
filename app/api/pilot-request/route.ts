import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      clinicName,
      yourName,
      workEmail,
      activePatients,
      monthlyFee,
      pilotInterest,
      biggestFriction,
    } = data;

    // Email to you (notification)
    const notificationEmail = {
      to: process.env.NOTIFICATION_EMAIL || 'contact@retentionhealth.com',
      from: process.env.NOTIFICATION_EMAIL || 'contact@retentionhealth.com',
      subject: `New Pilot Request: ${clinicName}`,
      html: `
        <h2>New Pilot Discussion Request</h2>
        
        <h3>Clinic Information</h3>
        <ul>
          <li><strong>Clinic Name:</strong> ${clinicName}</li>
          <li><strong>Contact Name:</strong> ${yourName}</li>
          <li><strong>Email:</strong> ${workEmail}</li>
        </ul>
        
        <h3>Program Details</h3>
        <ul>
          <li><strong>Active GLP-1 Patients:</strong> ${activePatients}</li>
          <li><strong>Monthly Program Fee:</strong> ${monthlyFee}</li>
        </ul>
        
        <h3>Pilot Intent</h3>
        <ul>
          <li><strong>Pilot Interest:</strong> ${pilotInterest}</li>
          <li><strong>Biggest Friction:</strong> ${biggestFriction}</li>
        </ul>
        
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // Email to lead (confirmation)
    const confirmationEmail = {
      to: workEmail,
      from: process.env.NOTIFICATION_EMAIL || 'contact@retentionhealth.com',
      subject: 'Pilot Discussion Request Received - Retention Health',
      html: `
        <h2>Thank you for your interest, ${yourName}!</h2>
        
        <p>We've received your pilot discussion request for ${clinicName}.</p>
        
        <p>Our team will review your information and reach out within 1 business day to schedule a discussion about how Retention Health can help reduce your GLP-1 month-1 drop-off.</p>
        
        <h3>What's Next?</h3>
        <ol>
          <li>We'll review your program details (${activePatients} patients, ${monthlyFee} monthly fee)</li>
          <li>Schedule a 30-minute discovery call</li>
          <li>Discuss how our retention infrastructure can address your ${biggestFriction}</li>
        </ol>
        
        <p>In the meantime, feel free to reply to this email with any questions.</p>
        
        <p>Best regards,<br>
        The Retention Health Team</p>
        
        <hr>
        <p style="font-size: 12px; color: #666;">
          Retention Health | Retention infrastructure for GLP-1 subscription programs<br>
          <a href="mailto:contact@retentionhealth.com">contact@retentionhealth.com</a>
        </p>
      `,
    };

    // Send both emails
    await sgMail.send(notificationEmail);
    await sgMail.send(confirmationEmail);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
