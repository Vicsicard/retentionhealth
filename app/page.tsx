export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Reduce GLP-1 Month-1 Drop-Off.
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Retention infrastructure for subscription-based GLP-1 clinics.
          </p>
          <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
            The first 30 days are the highest churn window. Retention Health stabilizes that window.
          </p>
          <p className="text-base text-gray-600 mb-10 max-w-2xl mx-auto">
            Built for programs managing 300+ active patients.
          </p>
          <a 
            href="mailto:contact@retentionhealth.com?subject=Pilot Discussion Request"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700"
          >
            Request Pilot Discussion
          </a>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500"></div>

      {/* REVENUE IMPACT */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Even Modest Retention Improvement Has Meaningful Revenue Impact.
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-10 rounded-lg border border-blue-100">
            <p className="text-lg text-gray-700 mb-6">Example scenario:</p>
            <ul className="space-y-3 mb-8 text-gray-700 text-lg">
              <li>• 1,500 active GLP-1 patients</li>
              <li>• $399 average monthly program fee</li>
              <li>• 12% month-one drop-off</li>
            </ul>
            <p className="text-xl font-semibold text-gray-900 mb-3">
              A 3% retention improvement protects:
            </p>
            <p className="text-4xl font-bold text-blue-600 mb-8">
              $200,000+ in annual recurring revenue.
            </p>
            <p className="text-sm text-gray-500 italic">
              Modeled example. Impact varies by program.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>

      {/* WHAT THIS ACTUALLY IS */}
      <section className="py-24 bg-gradient-to-b from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            What Retention Health Actually Is
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-900 mb-10 leading-relaxed text-center font-semibold">
              Retention Health is a white-label behavioral stabilization layer that sits inside your GLP-1 program.
            </p>
            
            <div className="bg-white p-8 rounded-lg mb-8 border border-teal-100 shadow-sm">
              <p className="text-lg text-gray-700 mb-6">It does not:</p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>• Replace prescribing</li>
                <li>• Replace your EMR</li>
                <li>• Require coaching staff</li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-900 font-semibold text-center">
              It provides injection-cycle–aware nutrition structure to stabilize the first 30 days.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500"></div>

      {/* WHY MONTH ONE BREAKS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Month One Breaks
          </h2>
          <p className="text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Month one instability is operational, not clinical.
          </p>
          
          <div className="bg-gray-50 p-10 rounded-lg mb-8 border border-gray-200">
            <p className="font-semibold text-gray-900 mb-6 text-lg">Common friction points:</p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Appetite suppression volatility</li>
              <li>• Dose escalation nausea</li>
              <li>• Incomplete protein intake</li>
              <li>• Increased support messaging</li>
              <li>• Early cancellation before month two</li>
            </ul>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-4">
              Most programs prescribe effectively. Few provide structured nutrition stabilization during this window.
            </p>
            <p className="text-lg text-gray-900 font-semibold">
              Avoidable churn compounds across every new cohort you enroll.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>

      {/* HOW IT INTEGRATES */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Integrates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Patients receive:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Injection-cycle–aware guidance</li>
                <li>• Symptom-adaptive recommendations</li>
                <li>• Structured protein prioritization</li>
                <li>• Stabilization during appetite volatility</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-teal-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Clinics receive:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Active seat tracking</li>
                <li>• Usage visibility</li>
                <li>• Retention-risk indicators</li>
                <li>• Volume-based billing</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Deployment</h3>
            <ul className="space-y-3 text-gray-700 mb-6 max-w-2xl mx-auto">
              <li>• Subdomain deployment</li>
              <li>• Custom branding</li>
              <li>• No EMR integration required (MVP)</li>
              <li>• Multi-tenant secure architecture</li>
              <li>• Seat-based pricing</li>
            </ul>
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-semibold text-lg mb-2">Minimal operational lift.</p>
              <p className="text-gray-900 font-bold text-lg">Live within days, not months.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500"></div>

      {/* PILOT */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            60-Day Retention Pilot
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Structured evaluation. Not a beta experiment.
          </p>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Evaluate retention stabilization without restructuring your program.
          </p>
          
          <div className="bg-white p-10 rounded-lg mb-10 text-left max-w-2xl mx-auto border border-blue-100 shadow-sm">
            <p className="font-semibold text-gray-900 mb-6 text-lg">Includes:</p>
            <ul className="space-y-3 text-gray-700">
              <li>• White-label configuration</li>
              <li>• Baseline retention modeling</li>
              <li>• Active seat reporting</li>
              <li>• Founder-led onboarding</li>
            </ul>
            <p className="text-gray-600 mt-8 pt-6 border-t border-gray-200">
              Seat-based pricing structured around active patient volume.
            </p>
          </div>
          
          <a 
            href="mailto:contact@retentionhealth.com?subject=Pilot Discussion Request"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded font-semibold hover:bg-blue-700 text-lg shadow-md hover:shadow-lg transition-shadow"
          >
            Schedule Pilot Discussion
          </a>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>

      {/* FOOTER CREDIBILITY */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Retention Health builds retention infrastructure for subscription-based healthcare programs.
          </p>
          <p className="text-gray-700 mb-6">
            Focused on operational churn reduction — not consumer diet applications.
          </p>
          <a 
            href="https://www.linkedin.com/in/vic-sicard-6aa30725b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            LinkedIn →
          </a>
        </div>
      </section>
    </div>
  );
}
