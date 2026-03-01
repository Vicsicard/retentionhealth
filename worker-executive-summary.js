// Cloudflare Worker for RetentionHealth Executive Summary Email Submissions
// Handles: Executive Summary Modal, Stabilize Early Window CTA, Schedule Executive Review CTA

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const data = await request.json();
      const {
        name,
        email,
        calculatorData,
        schedulingPreferences,
        timezone,
        source,
        timestamp,
      } = data;

      // Validate required fields
      if (!name || !email) {
        return new Response(JSON.stringify({ error: 'Name and email are required' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // SendGrid API configuration
      const SENDGRID_API_KEY = env.SENDGRID_API_KEY;
      const NOTIFICATION_EMAIL = env.NOTIFICATION_EMAIL || 'contact@retentionhealth.com';

      // Format currency
      const formatCurrency = (num) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(num);
      };

      // Calculate pricing band recommendation
      let pricingBand = 'Not calculated';
      let annualInvestmentRange = 'Contact for pricing';
      
      if (calculatorData && calculatorData.annualLoss) {
        const annualLoss = calculatorData.annualLoss;
        
        if (annualLoss < 100000) {
          pricingBand = 'Starter';
          annualInvestmentRange = '$12,000 - $24,000';
        } else if (annualLoss < 250000) {
          pricingBand = 'Growth';
          annualInvestmentRange = '$24,000 - $48,000';
        } else if (annualLoss < 500000) {
          pricingBand = 'Scale';
          annualInvestmentRange = '$48,000 - $96,000';
        } else if (annualLoss < 1000000) {
          pricingBand = 'Enterprise';
          annualInvestmentRange = '$96,000 - $150,000';
        } else {
          pricingBand = 'Enterprise Plus';
          annualInvestmentRange = '$150,000+';
        }
      }

      // Email to you (notification)
      const notificationEmail = {
        personalizations: [{
          to: [{ email: NOTIFICATION_EMAIL }],
          subject: `Executive Summary Request: ${name} - ${calculatorData ? formatCurrency(calculatorData.annualLoss) : 'N/A'} Annual Exposure`,
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
              <li><strong>Source:</strong> ${source || 'land2'}</li>
              <li><strong>Timestamp:</strong> ${timestamp || new Date().toISOString()}</li>
            </ul>
            
            ${schedulingPreferences && schedulingPreferences.length > 0 ? `
            <h3>Scheduling Preferences</h3>
            <p><strong>Timezone:</strong> ${timezone || 'Not specified'}</p>
            <ul>
              ${schedulingPreferences.map((pref, idx) => `
                <li><strong>${idx === 0 ? '1st Choice' : idx === 1 ? '2nd Choice' : '3rd Choice'}:</strong> ${pref.date} at ${pref.time}</li>
              `).join('')}
            </ul>
            ` : '<p><em>No scheduling preferences provided</em></p>'}
            
            ${calculatorData ? `
            <h3>Exposure Analysis</h3>
            <ul>
              <li><strong>Patients Per Month:</strong> ${calculatorData.patientsPerMonth}</li>
              <li><strong>Avg Monthly Revenue:</strong> ${formatCurrency(calculatorData.avgMonthlyRevenue)}</li>
              <li><strong>Early Churn Rate:</strong> ${calculatorData.earlyChurnRate}%</li>
              <li><strong>Number of Locations:</strong> ${calculatorData.numLocations}</li>
            </ul>
            
            <h3>Financial Impact</h3>
            <ul>
              <li><strong>Monthly Loss:</strong> ${formatCurrency(calculatorData.monthlyLoss)}</li>
              <li><strong>Annual Loss:</strong> ${formatCurrency(calculatorData.annualLoss)}</li>
              <li><strong>3-Year Cumulative:</strong> ${formatCurrency(calculatorData.threeYearLoss)}</li>
            </ul>
            
            <h3>Pricing Recommendation</h3>
            <ul>
              <li><strong>Recommended Band:</strong> ${pricingBand}</li>
              <li><strong>Annual Investment Range:</strong> ${annualInvestmentRange}</li>
              <li><strong>ROI Potential:</strong> ${calculatorData.annualLoss > 0 ? ((calculatorData.annualLoss * 0.15) / (parseFloat(annualInvestmentRange.replace(/[^0-9]/g, '')) || 1) * 100).toFixed(0) : 'N/A'}% (at 15% stabilization)</li>
            </ul>
            ` : '<p><em>No calculator data provided</em></p>'}
            
            <hr>
            <p><strong>Next Steps:</strong></p>
            <ol>
              <li>Review exposure analysis</li>
              <li>Prepare executive summary with pricing context</li>
              <li>Schedule 20-minute strategic review call</li>
            </ol>
          `,
        }],
      };

      // Email to lead (executive summary)
      const leadEmail = {
        personalizations: [{
          to: [{ email: email }],
          subject: 'Your GLP-1 Instability Exposure Analysis',
        }],
        from: { 
          email: NOTIFICATION_EMAIL,
          name: 'RetentionHealth'
        },
        content: [{
          type: 'text/html',
          value: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e293b;">Your Executive Exposure Summary</h2>
              
              <p>Hi ${name},</p>
              
              <p>Thank you for analyzing your early-window instability exposure. Based on your inputs, here's what we found:</p>
              
              ${calculatorData ? `
              <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e293b;">Your 90-Day Instability Window</h3>
                <ul style="line-height: 1.8;">
                  <li><strong>Monthly Revenue at Risk:</strong> ${formatCurrency(calculatorData.monthlyLoss)}</li>
                  <li><strong>Annual Exposure:</strong> ${formatCurrency(calculatorData.annualLoss)}</li>
                  <li><strong>3-Year Cumulative Impact:</strong> ${formatCurrency(calculatorData.threeYearLoss)}</li>
                </ul>
              </div>
              
              <h3 style="color: #1e293b;">What This Means</h3>
              <p>This revenue destabilizes during the first 90 days — before long-term retention patterns ever form. Most clinics underestimate this exposure because it's hidden inside early-window volatility.</p>
              
              <h3 style="color: #1e293b;">The Opportunity</h3>
              <p>Even a modest 10-15% reduction in early instability can recover <strong>${formatCurrency((calculatorData.patientsPerMonth * 0.15) * (calculatorData.avgMonthlyRevenue * 3) * 12 * calculatorData.numLocations)}</strong> annually.</p>
              ` : ''}
              
              <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <h3 style="margin-top: 0; color: #1e293b;">Next Step: Executive Review</h3>
                <p style="margin-bottom: 15px;">We'll coordinate a 20-minute strategic session to:</p>
                <ul style="line-height: 1.8;">
                  <li>Walk through your specific exposure analysis</li>
                  <li>Discuss stabilization architecture options</li>
                  <li>Review pricing relative to your exposure</li>
                </ul>
                <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin-top: 20px;">
                  <p style="margin: 0; font-weight: bold; color: #1e293b;">📧 We'll send you scheduling options within 24 hours</p>
                  <p style="margin: 10px 0 0 0; font-size: 14px; color: #475569;">Watch for our email from contact@retentionhealth.com (check spam/junk folder if needed)</p>
                </div>
              </div>
              
              <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
                Questions? Reply to this email or contact us at ${NOTIFICATION_EMAIL}
              </p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
              
              <p style="color: #94a3b8; font-size: 12px;">
                RetentionHealth<br>
                Early-Window Stabilization for GLP-1 Programs
              </p>
            </div>
          `,
        }],
      };

      // Send both emails via SendGrid
      const sendEmail = async (emailData) => {
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
          throw new Error(`SendGrid error: ${error}`);
        }

        return response;
      };

      // Send both emails
      await Promise.all([
        sendEmail(notificationEmail),
        sendEmail(leadEmail),
      ]);

      return new Response(JSON.stringify({ 
        success: true,
        message: 'Executive summary sent successfully'
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (error) {
      console.error('Error processing request:', error);
      return new Response(JSON.stringify({ 
        error: 'Failed to send executive summary',
        details: error.message 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
