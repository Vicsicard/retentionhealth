import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Retention Health",
  description: "Retention Health builds retention infrastructure for subscription-based healthcare programs.",
};

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About Retention Health
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Retention Health builds retention infrastructure for subscription-based healthcare programs.
          </p>
          
          <p className="text-gray-700 mb-8">
            We focus on operational stabilization during the highest churn window of GLP-1 programs: the first 30 days.
          </p>
          
          <p className="text-gray-700 mb-8">
            Our goal is simple: Help clinics protect recurring revenue by reducing avoidable early drop-off.
          </p>
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Retention Health Exists
          </h2>
          
          <p className="text-gray-700 mb-6">
            GLP-1 medications are effective.
          </p>
          
          <p className="text-gray-700 mb-6">
            The operational challenge appears during dose escalation:
          </p>
          
          <ul className="space-y-2 text-gray-700 mb-8 ml-6">
            <li>• Appetite volatility</li>
            <li>• Nausea peaks</li>
            <li>• Food aversion</li>
            <li>• Increased support messaging</li>
            <li>• Early cancellations</li>
          </ul>
          
          <p className="text-gray-700 mb-6">
            Most programs prescribe medication well.
          </p>
          
          <p className="text-gray-700 mb-8">
            Few embed structured behavioral nutrition stabilization during this window.
          </p>
          
          <p className="text-gray-700 mb-8">
            Retention Health was built to close that operational gap.
          </p>
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Infrastructure First
          </h2>
          
          <p className="text-gray-700 mb-6">
            Retention Health is not a consumer diet application.
          </p>
          
          <p className="text-gray-700 mb-6">
            It is a white-label infrastructure layer designed for:
          </p>
          
          <ul className="space-y-2 text-gray-700 mb-8 ml-6">
            <li>• Telehealth GLP-1 clinics</li>
            <li>• Subscription-based medical programs</li>
            <li>• Operators managing 300+ active patients</li>
          </ul>
          
          <p className="text-gray-700 mb-8">
            The platform integrates as a revenue-supporting layer, not a marketing tool.
          </p>
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Founder
          </h2>
          
          <p className="text-gray-700 mb-6">
            Retention Health was founded by Vic Sicard, an infrastructure-focused SaaS operator with experience designing multi-tenant systems and revenue-stabilization platforms.
          </p>
          
          <p className="text-gray-700 mb-8">
            The company is built with long-term operational durability in mind — not rapid consumer growth.
          </p>
          
          <a 
            href="https://www.linkedin.com/in/vic-sicard-6aa30725b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
          >
            LinkedIn →
          </a>
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Long-Term Focus
          </h2>
          
          <p className="text-gray-700 mb-6">
            Retention Health is designed to expand across subscription-based healthcare models where retention stability determines program profitability.
          </p>
          
          <p className="text-gray-700 mb-6">
            GLP-1 programs are the starting point.
          </p>
          
          <p className="text-gray-700 mb-8">
            The mission is broader: Operational retention infrastructure for modern healthcare subscriptions.
          </p>
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact
          </h2>
          
          <p className="text-gray-700">
            For partnership inquiries:{" "}
            <a 
              href="mailto:contact@retentionhealth.com"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              contact@retentionhealth.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
