interface Env {
  SENDGRID_API_KEY: string;
  NOTIFICATION_EMAIL: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  try {
    const data = await request.json() as {
      name: string;
      email: string;
      company?: string;
      message: string;
    };

    const { name, email, company, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const SENDGRID_API_KEY = env.SENDGRID_API_KEY;
    const NOTIFICATION_EMAIL = env.NOTIFICATION_EMAIL || 'contact@retentionhealth.com';

    // Email to you (notification)
    const emailData = {
      personalizations: [{
        to: [{ email: NOTIFICATION_EMAIL }],
        subject: `Contact Form: ${name}${company ? ` from ${company}` : ''}`,
      }],
      from: { 
        email: NOTIFICATION_EMAIL,
        name: 'RetentionHealth Contact Form'
      },
      content: [{
        type: 'text/html',
        value: `
          <h2>New Contact Form Submission</h2>
          
          <h3>Contact Information</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
            <li><strong>Submitted:</strong> ${new Date().toISOString()}</li>
          </ul>
          
          <h3>Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
          
          <hr>
          <p><strong>Reply to:</strong> <a href="mailto:${email}">${email}</a></p>
        `,
      }],
      reply_to: {
        email: email,
        name: name,
      },
    };

    // Send email via SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('SendGrid error:', error);
      throw new Error(`SendGrid error: ${error}`);
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Contact form submitted successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
