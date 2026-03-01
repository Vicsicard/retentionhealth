import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Retention Health",
  description: "Privacy Policy for Retention Health retention infrastructure platform.",
};

export default function Privacy() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <p className="text-sm text-gray-600 mb-12">
          Last Updated: February 27, 2025
        </p>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Overview
            </h2>
            <p className="mb-4">
              Retention Health (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides retention infrastructure for subscription-based healthcare programs. This Privacy Policy describes how we collect, use, and protect information in connection with our platform.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect limited information necessary to operate our retention infrastructure platform:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Clinic account information (business name, contact details)</li>
              <li>Usage data and analytics related to platform engagement</li>
              <li>Behavioral nutrition inputs provided by end users through clinic deployments</li>
              <li>Technical information (IP addresses, browser type, device information)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How We Use Information
            </h2>
            <p className="mb-4">
              Information collected is used to:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Provide and maintain the retention infrastructure platform</li>
              <li>Generate adaptive behavioral nutrition recommendations</li>
              <li>Provide usage analytics and retention metrics to clinic partners</li>
              <li>Improve platform functionality and user experience</li>
              <li>Communicate with clinic partners about service delivery</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Minimization
            </h2>
            <p className="mb-4">
              Retention Health is designed to minimize data collection and storage. We do not:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Replace or integrate with clinical systems</li>
              <li>Store protected health information (PHI) beyond operational necessity</li>
              <li>Provide medical decision-making or clinical advice</li>
              <li>Share data with third-party advertisers or marketers</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect information:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Encrypted data transmission using TLS</li>
              <li>Multi-tenant logical separation between clinic environments</li>
              <li>Role-based access controls</li>
              <li>Hosting on Cloudflare&apos;s secure global network</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Retention
            </h2>
            <p className="mb-4">
              We retain operational data only as long as necessary to provide services to clinic partners. Clinic partners may request data deletion upon termination of services, subject to legal and operational requirements.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="mb-4">
              Our platform is hosted on Cloudflare infrastructure. We do not share data with third-party marketing or advertising services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Clinic Partner Responsibilities
            </h2>
            <p className="mb-4">
              Clinic partners deploying Retention Health infrastructure are responsible for:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Obtaining appropriate consents from their patients</li>
              <li>Maintaining compliance with applicable healthcare regulations</li>
              <li>Providing appropriate privacy notices to end users</li>
              <li>Maintaining clinical oversight of patient care</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="mb-4">
              Depending on your jurisdiction, you may have rights regarding your information, including access, correction, and deletion. Contact us at the email below to exercise these rights.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically. Material changes will be communicated to clinic partners via email.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="mb-2">
              For privacy-related questions or requests:
            </p>
            <p className="mb-4">
              Email:{" "}
              <a 
                href="mailto:contact@retentionhealth.com?subject=Privacy Inquiry"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                contact@retentionhealth.com
              </a>
            </p>
            <p>
              Address: 302 Arapahoe Ave, Boulder, CO 80301
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
