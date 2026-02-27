import { TrendingDown, MessageSquare, RefreshCw, AlertTriangle, Target, TrendingUp, Utensils, Users, Zap, DollarSign, CheckCircle, XCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Reduce GLP-1 Month-1 Drop-Off.
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Built for GLP-1 subscription programs that want to stabilize early retention.
              </p>
              <p className="text-lg text-gray-600 mb-10">
                Retention infrastructure for clinics managing 300+ active patients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:contact@retentionhealth.com?subject=Pilot Discussion Request"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 text-lg shadow-md text-center"
                >
                  Schedule Pilot Discussion
                </a>
                <a 
                  href="#revenue"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 text-lg border-2 border-blue-600 text-center"
                >
                  View Revenue Impact
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
              <img 
                src="/patient drop.png" 
                alt="GLP-1 patient retention pattern showing rapid drop-off after first injection vs. stabilized retention with $215K+ ARR protected"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* PATTERN RECOGNITION - OPERATORS KNOW THIS */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Operators Know This Pattern
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Month one instability is operational, not clinical.
          </p>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Appetite volatility after injection</h3>
                <p className="text-gray-600">Patients unsure what to eat during suppression phases</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Support inbox spikes</h3>
                <p className="text-gray-600">Food-related questions during dose escalation</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Nausea uncertainty</h3>
                <p className="text-gray-600">Patients struggle with protein intake during peaks</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Early drop-off before month two</h3>
                <p className="text-gray-600">Cancellations during the highest churn window</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg text-gray-900 font-semibold mt-16 max-w-2xl mx-auto">
            Avoidable churn compounds across every new cohort you enroll.
          </p>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* REVENUE IMPACT */}
      <section id="revenue" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Even Modest Retention Improvement Has Meaningful Revenue Impact
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-teal-50 p-12 rounded-2xl border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-8">Example scenario:</p>
              <div className="space-y-3 text-left max-w-md mx-auto mb-10">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Active GLP-1 patients:</span>
                  <span className="font-semibold text-gray-900">1,500</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Average monthly fee:</span>
                  <span className="font-semibold text-gray-900">$399</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Month-one drop-off:</span>
                  <span className="font-semibold text-gray-900">12%</span>
                </div>
              </div>
              
              <div className="border-t-2 border-blue-200 pt-8">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  A 3% retention improvement protects:
                </p>
                <p className="text-5xl font-bold text-blue-600 mb-4">
                  $200,000+
                </p>
                <p className="text-lg text-gray-700">in annual recurring revenue</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic text-center">
              Modeled example. Impact varies by program.
            </p>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#solution"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 text-lg shadow-md"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* PRODUCT DEFINITION */}
      <section id="solution" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            What Retention Health Actually Is
          </h2>
          <p className="text-2xl text-gray-900 mb-16 text-center font-semibold max-w-3xl mx-auto leading-relaxed">
            A white-label behavioral stabilization layer that sits inside your GLP-1 program.
          </p>
          
          {/* Product Flow Diagram */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-12 rounded-2xl border-2 border-blue-200 mb-20">
            <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-md mb-4">
                  <p className="font-semibold text-gray-900 text-lg">Your Clinic Program</p>
                </div>
                <p className="text-sm text-gray-600">Prescribing & clinical care</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-2">→</div>
                <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg mb-4">
                  <p className="font-bold text-lg">RetentionHealth Layer</p>
                </div>
                <p className="text-sm text-gray-600">Behavioral stabilization</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-2">→</div>
                <div className="bg-white p-6 rounded-xl shadow-md mb-4">
                  <p className="font-semibold text-gray-900 text-lg">Stabilized Behavior</p>
                </div>
                <p className="text-sm text-gray-600">Reduced early churn</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-10 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">It does not:</h3>
              <ul className="space-y-5 text-gray-700 text-lg">
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Replace prescribing</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Replace your EMR</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>Require coaching staff</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-10 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">It provides:</h3>
              <ul className="space-y-5 text-gray-700 text-lg">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Injection-cycle–aware nutrition structure</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Symptom-adaptive recommendations</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span>First 30-day stabilization</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:contact@retentionhealth.com?subject=Product Discussion"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 text-lg shadow-md"
            >
              Discuss Your Program
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* FEATURES GRID */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            How It Integrates
          </h2>
          <p className="text-xl text-gray-600 mb-20 text-center max-w-3xl mx-auto">
            Outcome-focused infrastructure that reduces operational load and stabilizes patient behavior.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Patient-Facing Features */}
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Injection-Cycle Guidance</h3>
                  <p className="text-gray-600 mb-3">Timing-aware nutrition recommendations</p>
                  <p className="text-sm text-blue-600 font-semibold">→ Optimized support timing reduces confusion</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Symptom Feedback</h3>
                  <p className="text-gray-600 mb-3">Adaptive responses to patient input</p>
                  <p className="text-sm text-blue-600 font-semibold">→ Personalized guidance during volatility</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Protein Prioritization</h3>
                  <p className="text-gray-600 mb-3">Structured intake during suppression</p>
                  <p className="text-sm text-blue-600 font-semibold">→ Reduces nausea-related drop-off</p>
                </div>
              </div>
            </div>
            
            {/* Clinic-Facing Features */}
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Active Seat Tracking</h3>
                  <p className="text-gray-600 mb-3">Real-time patient engagement metrics</p>
                  <p className="text-sm text-teal-600 font-semibold">→ Visibility into program utilization</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Retention Indicators</h3>
                  <p className="text-gray-600 mb-3">Early churn risk visibility</p>
                  <p className="text-sm text-teal-600 font-semibold">→ Early alerts enable intervention</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 shadow-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Volume Billing</h3>
                  <p className="text-gray-600 mb-3">Seat-based pricing structure</p>
                  <p className="text-sm text-teal-600 font-semibold">→ Scales with your patient volume</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-xl border-2 border-blue-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Deployment</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">300+ active patients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Subdomain deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Custom branding</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">No EMR required (MVP)</span>
              </div>
            </div>
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-semibold text-lg mb-2">Minimal operational lift.</p>
              <p className="text-gray-900 font-bold text-xl">Live within days, not months.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500"></div>

      {/* PILOT CTA */}
      <section id="pilot" className="py-20 bg-gradient-to-b from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            60-Day Retention Pilot
          </h2>
          <p className="text-xl mb-4 opacity-90">
            Structured evaluation. Not a beta experiment.
          </p>
          <p className="text-2xl mb-16 max-w-2xl mx-auto">
            Evaluate retention stabilization without restructuring your program.
          </p>
          
          <div className="bg-white text-gray-900 p-10 rounded-xl mb-12 text-left max-w-2xl mx-auto shadow-2xl">
            <p className="font-semibold text-gray-900 mb-6 text-xl">Pilot includes:</p>
            <ul className="space-y-4 text-gray-700 text-lg mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>White-label configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Baseline retention modeling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Active seat reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Founder-led onboarding</span>
              </li>
            </ul>
            <p className="text-gray-600 pt-6 border-t border-gray-200">
              Seat-based pricing structured around active patient volume.
            </p>
          </div>
          
          <a 
            href="mailto:contact@retentionhealth.com?subject=Pilot Discussion Request"
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-lg font-bold hover:bg-gray-100 text-xl shadow-2xl"
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
