import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, calculatorData, source, timestamp } = body;

    // Log the submission (in production, this would go to your database/CRM)
    console.log('Executive Summary Request:', {
      name,
      email,
      source,
      timestamp,
      exposure: {
        monthly: calculatorData.monthlyLoss,
        annual: calculatorData.annualLoss,
        threeYear: calculatorData.threeYearLoss,
      },
      inputs: {
        patientsPerMonth: calculatorData.patientsPerMonth,
        avgMonthlyRevenue: calculatorData.avgMonthlyRevenue,
        earlyChurnRate: calculatorData.earlyChurnRate,
        numLocations: calculatorData.numLocations,
      },
    });

    // In production, you would:
    // 1. Store in database
    // 2. Send to CRM (HubSpot, Salesforce, etc.)
    // 3. Trigger email automation
    // 4. Send executive summary email

    // For now, return success
    return NextResponse.json({ 
      success: true,
      message: 'Executive summary request received'
    });

  } catch (error) {
    console.error('Error processing executive summary request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
