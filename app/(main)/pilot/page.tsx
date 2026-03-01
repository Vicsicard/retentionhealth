import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "60-Day Retention Pilot - Retention Health",
  description: "Evaluate retention stabilization during your highest churn window without restructuring your program.",
};

export default function Pilot() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          60-Day Retention Pilot
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Evaluate retention stabilization during your highest churn window — without restructuring your program.
        </p>
        
        <p className="text-gray-700 mb-12">
          Retention Health offers structured pilots for subscription-based GLP-1 clinics with 300+ active patients.
        </p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pilot Objectives
            </h2>
            
            <p className="text-gray-700 mb-6">The pilot is designed to:</p>
            
            <ul className="space-y-3 text-gray-700 mb-6 ml-6">
              <li>• Establish baseline month-one retention</li>
              <li>• Monitor active patient engagement</li>
              <li>• Identify dose escalation instability patterns</li>
              <li>• Evaluate early churn reduction potential</li>
            </ul>
            
            <p className="text-gray-700 font-semibold mb-2">
              This is not a consumer beta.
            </p>
            <p className="text-gray-700">
              It is a structured operational pilot.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What&apos;s Included
            </h2>
            
            <ul className="space-y-3 text-gray-700 mb-6 ml-6">
              <li>• White-label deployment</li>
              <li>• Subdomain configuration</li>
              <li>• Injection-cycle retention engine</li>
              <li>• Active seat tracking</li>
              <li>• Usage analytics dashboard</li>
              <li>• Monthly summary reporting</li>
              <li>• Founder-led onboarding</li>
            </ul>
            
            <p className="text-gray-700">
              No EMR integration required for MVP.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pilot Structure
            </h2>
            
            <ul className="space-y-3 text-gray-700 mb-6 ml-6">
              <li>• 60-day duration</li>
              <li>• Seat-based pricing</li>
              <li>• Volume structured by active GLP-1 census</li>
              <li>• Dedicated onboarding session</li>
              <li>• Midpoint review</li>
              <li>• End-of-pilot retention assessment</li>
            </ul>
            
            <p className="text-gray-700 font-semibold">
              Minimum 300 active GLP-1 patients required.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ideal Pilot Partner
            </h2>
            
            <p className="text-gray-700 mb-4">Retention Health is best suited for:</p>
            
            <ul className="space-y-3 text-gray-700 ml-6">
              <li>• Telehealth GLP-1 clinics</li>
              <li>• Subscription-based weight loss programs</li>
              <li>• Operators managing 300–3,000 active patients</li>
              <li>• Programs actively tracking month-one retention</li>
            </ul>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Next Step
            </h2>
            
            <p className="text-gray-700 mb-8">
              If you are evaluating operational retention stabilization within your GLP-1 program, schedule a discussion below.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="mailto:contact@retentionhealth.com?subject=Pilot Discussion Request"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 text-center"
              >
                Schedule Pilot Discussion
              </a>
            </div>
            
            <p className="text-gray-600">
              or email:{" "}
              <a 
                href="mailto:contact@retentionhealth.com"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                contact@retentionhealth.com
              </a>
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h2>
            
            <p className="text-gray-700">
              Retention Health provides behavioral nutrition support tools and does not replace medical oversight or prescribing decisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
