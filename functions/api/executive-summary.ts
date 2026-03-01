// Cloudflare Pages Function for handling executive summary requests
export async function onRequestPost(context: any) {
  try {
    const data = await context.request.json();
    const {
      name,
      email,
      calculatorData,
      source,
      timestamp,
    } = data;

    // SendGrid API configuration
    const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY;
    const NOTIFICATION_EMAIL = context.env.NOTIFICATION_EMAIL || 'contact@retentionhealth.com';

    // Format currency
    const formatCurrency = (num: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(num);
    };

    // Email to you (notification)
    const notificationEmail = {
      personalizations: [{
        to: [{ email: NOTIFICATION_EMAIL }],
        subject: `Executive Summary Request: ${name} - ${formatCurrency(calculatorData.annualLoss)} Annual Exposure`,
      }],
      from: { email: NOTIFICATION_EMAIL },
      content: [{
        type: 'text/html',
        value: `
          <h2>New Executive Exposure Summary Request</h2>
          
          <h3>Contact Information</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Source:</strong> ${source}</li>
          </ul>
          
          <h3>Exposure Analysis</h3>
          <ul>
            <li><strong>Monthly Loss:</strong> ${formatCurrency(calculatorData.monthlyLoss)}</li>
            <li><strong>Annual Loss:</strong> ${formatCurrency(calculatorData.annualLoss)}</li>
            <li><strong>3-Year Cumulative:</strong> ${formatCurrency(calculatorData.threeYearLoss)}</li>
          </ul>
          
          <h3>Calculator Inputs</h3>
          <ul>
            <li><strong>New Patients/Month:</strong> ${calculatorData.patientsPerMonth}</li>
            <li><strong>Avg Monthly Revenue:</strong> ${formatCurrency(calculatorData.avgMonthlyRevenue)}</li>
            <li><strong>Early Churn Rate:</strong> ${calculatorData.earlyChurnRate}%</li>
            <li><strong>Number of Locations:</strong> ${calculatorData.numLocations}</li>
          </ul>
          
          <h3>Pricing Band Recommendation</h3>
          <p>${getPricingBand(calculatorData.annualLoss)}</p>
          
          <p><em>Submitted at: ${new Date(timestamp).toLocaleString()}</em></p>
        `,
      }],
    };

    // Email to lead (executive summary)
    const summaryEmail = {
      personalizations: [{
        to: [{ email: email }],
        subject: 'Your GLP-1 Early-Window Exposure Summary - RetentionHealth',
      }],
      from: { email: NOTIFICATION_EMAIL },
      content: [{
        type: 'text/html',
        value: `
          <h2>Executive Exposure Summary</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for analyzing your early-window instability exposure. Based on your inputs, here is your executive summary:</p>
          
          <h3>Your 90-Day Instability Exposure</h3>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin: 20px 0;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Monthly Revenue at Risk</strong></td>
              <td style="padding: 12px; border: 1px solid #dee2e6; text-align: right;">${formatCurrency(calculatorData.monthlyLoss)}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>Annual Exposure</strong></td>
              <td style="padding: 12px; border: 1px solid #dee2e6; text-align: right; font-size: 18px; font-weight: bold; color: #dc3545;">${formatCurrency(calculatorData.annualLoss)}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6;"><strong>3-Year Cumulative</strong></td>
              <td style="padding: 12px; border: 1px solid #dee2e6; text-align: right;">${formatCurrency(calculatorData.threeYearLoss)}</td>
            </tr>
          </table>
          
          <h3>Key Insight</h3>
          <p style="background-color: #e7f3ff; padding: 15px; border-left: 4px solid #0066cc;">
            <strong>Even a modest stabilization shift materially changes continuity.</strong><br>
            If early instability is reduced by just 10%, the system self-funds.
          </p>
          
          <h3>Next Step: Strategic Review</h3>
          <p>We recommend reviewing this analysis in a 20-minute strategic session where we can:</p>
          <ul>
            <li>Validate your early instability rate</li>
            <li>Model stabilization impact potential</li>
            <li>Discuss pilot structure and pricing relative to your exposure</li>
          </ul>
          
          <p style="margin: 30px 0;">
            <a href="https://calendly.com/retentionhealth/executive-review" 
               style="background-color: #0066cc; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
              Schedule Executive Review
            </a>
          </p>
          
          <p>If you prefer to review this internally first, feel free to reply to this email with any questions.</p>
          
          <p>Best regards,<br>
          The RetentionHealth Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
          <p style="font-size: 12px; color: #666;">
            RetentionHealth | Early-Window Revenue Infrastructure for GLP-1 Programs<br>
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
        const errorText = await response.text();
        throw new Error(`SendGrid API error: ${response.status} - ${errorText}`);
      }
    };

    await sendEmail(notificationEmail);
    await sendEmail(summaryEmail);

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

// Helper function to determine pricing band
function getPricingBand(annualLoss: number): string {
  if (annualLoss < 250000) {
    return '<strong>Band A - Foundation Tier:</strong> Under $250K annual exposure. Estimated pricing: $30K-$48K annually.';
  } else if (annualLoss < 750000) {
    return '<strong>Band B - Growth Tier:</strong> $250K-$750K annual exposure. Estimated pricing: $48K-$90K annually.';
  } else if (annualLoss < 2000000) {
    return '<strong>Band C - Platform Tier:</strong> $750K-$2M annual exposure. Estimated pricing: $96K-$180K annually. Includes multi-location roll-up and dedicated success partner.';
  } else {
    return '<strong>Band D - Enterprise Tier:</strong> $2M+ annual exposure. Custom pricing with six-figure annual contracts, multi-site deployment, and white-label options.';
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
