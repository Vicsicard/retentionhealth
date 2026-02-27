// Cloudflare Pages Function for handling pilot discussion form submissions
export async function onRequestPost(context: any) {
  try {
    const data = await context.request.json();
    const {
      clinicName,
      yourName,
      workEmail,
      activePatients,
      monthlyFee,
      pilotInterest,
      biggestFriction,
    } = data;

    // SendGrid API configuration
    const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY;
    const NOTIFICATION_EMAIL = context.env.NOTIFICATION_EMAIL || 'contact@retentionhealth.com';

    // Email to you (notification)
    const notificationEmail = {
      personalizations: [{
        to: [{ email: NOTIFICATION_EMAIL }],
        subject: `New Pilot Request: ${clinicName}`,
      }],
      from: { email: NOTIFICATION_EMAIL },
      content: [{
        type: 'text/html',
        value: `
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
      }],
    };

    // Email to lead (confirmation)
    const confirmationEmail = {
      personalizations: [{
        to: [{ email: workEmail }],
        subject: 'Pilot Discussion Request Received - Retention Health',
      }],
      from: { email: NOTIFICATION_EMAIL },
      content: [{
        type: 'text/html',
        value: `
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
      }],
    };

    // Send both emails via SendGrid API
    const sendEmail = async (emailData: any) => {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error(`SendGrid API error: ${response.status}`);
      }
    };

    await sendEmail(notificationEmail);
    await sendEmail(confirmationEmail);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
