import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Data Architecture - Retention Health",
  description: "Security and data architecture information for Retention Health's retention infrastructure platform.",
};

export default function Security() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Security & Data Architecture
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Retention Health is designed as lightweight retention infrastructure for subscription-based healthcare programs.
        </p>
        
        <p className="text-gray-700 mb-12">
          Security and operational simplicity are core design principles.
        </p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Data Scope
            </h2>
            
            <p className="text-gray-700 mb-6">
              Retention Health is built to minimize stored data.
            </p>
            
            <p className="text-gray-700 mb-4">The platform:</p>
            
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li>• Does not replace clinical systems</li>
              <li>• Does not provide medical decision-making</li>
              <li>• Does not require EMR integration (MVP)</li>
              <li>• Stores only operational retention-related usage data</li>
            </ul>
            
            <p className="text-gray-700">
              Behavioral nutrition inputs are used solely to generate adaptive recommendations within the platform.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Infrastructure
            </h2>
            
            <p className="text-gray-700 mb-6">
              Retention Health is hosted on Cloudflare's global edge network.
            </p>
            
            <p className="text-gray-700 mb-4">Core infrastructure includes:</p>
            
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li>• Cloudflare Workers (serverless execution)</li>
              <li>• Cloudflare Pages (static frontend hosting)</li>
              <li>• Encrypted HTTPS connections</li>
              <li>• Multi-tenant logical separation between clinics</li>
              <li>• Role-based access controls</li>
            </ul>
            
            <p className="text-gray-700">
              All traffic is encrypted in transit using TLS.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Data Isolation
            </h2>
            
            <p className="text-gray-700 mb-6">
              Each clinic operates within a logically separated tenant environment.
            </p>
            
            <p className="text-gray-700">
              Configuration, branding, and usage data are isolated at the application layer to prevent cross-tenant access.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Access Controls
            </h2>
            
            <p className="text-gray-700 mb-6">
              Access to clinic-level dashboards is restricted via secure authentication.
            </p>
            
            <p className="text-gray-700">
              Administrative access is limited to authorized personnel.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Compliance Positioning
            </h2>
            
            <p className="text-gray-700 mb-6">
              Retention Health provides behavioral nutrition support tools.
            </p>
            
            <p className="text-gray-700 mb-4">It does not:</p>
            
            <ul className="space-y-2 text-gray-700 mb-6 ml-6">
              <li>• Replace medical advice</li>
              <li>• Modify prescribed medication protocols</li>
              <li>• Serve as a clinical decision engine</li>
            </ul>
            
            <p className="text-gray-700">
              Programs are responsible for maintaining clinical oversight of patient care.
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Security Contact
            </h2>
            
            <p className="text-gray-700">
              For security-related inquiries:{" "}
              <a 
                href="mailto:security@retentionhealth.com?subject=Security Inquiry"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                security@retentionhealth.com
              </a>
            </p>
          </section>
          
          <section className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ongoing Improvements
            </h2>
            
            <p className="text-gray-700 mb-6">
              Security architecture is continuously reviewed as the platform scales.
            </p>
            
            <p className="text-gray-700">
              As integrations expand, additional compliance measures may be implemented in alignment with program needs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
