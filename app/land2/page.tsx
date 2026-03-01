'use client';

import { useState } from 'react';
import { TrendingDown, AlertTriangle, Users, DollarSign, Target, CheckCircle, XCircle } from 'lucide-react';
import PilotModal from '@/components/PilotModal';
import ExecutiveSummaryModal from '@/components/ExecutiveSummaryModal';

export default function Land2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  
  const [patientsPerMonth, setPatientsPerMonth] = useState<number>(100);
  const [avgMonthlyRevenue, setAvgMonthlyRevenue] = useState<number>(600);
  const [earlyChurnRate, setEarlyChurnRate] = useState<number>(30);
  const [numLocations, setNumLocations] = useState<number>(1);
  const [isMultiLocation, setIsMultiLocation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const locationMultiplier = isMultiLocation ? numLocations : 1;
  
  const patientsLost = patientsPerMonth * (earlyChurnRate / 100);
  const revenueLostPerPatient = avgMonthlyRevenue * 3;
  const monthlyLoss = patientsLost * revenueLostPerPatient * locationMultiplier;
  const annualLoss = monthlyLoss * 12;
  const threeYearLoss = annualLoss * 3;

  const recoveredRevenue10 = (patientsPerMonth * 0.10) * revenueLostPerPatient * 12 * locationMultiplier;
  const recoveredRevenue15 = (patientsPerMonth * 0.15) * revenueLostPerPatient * 12 * locationMultiplier;
  const recoveredRevenue20 = (patientsPerMonth * 0.20) * revenueLostPerPatient * 12 * locationMultiplier;

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <div className="bg-white overflow-x-hidden w-full">
      <PilotModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* SECTION 1 — HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-24 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-slate-900 mb-6 sm:mb-8 leading-tight tracking-tight">
              The Instability Window Is Where You Lose the Patient.
            </h1>
            <p className="text-xl sm:text-2xl text-slate-900 mb-4 sm:mb-6 font-bold leading-relaxed">
              Not because the medication fails.<br />
              Because your system fails to stabilize behavior early.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Every GLP-1 patient enters a predictable instability window.
              <br /><br />
              Side effects. Expectation gaps. Motivation fluctuations. Behavioral friction.
              <br /><br />
              <span className="font-semibold text-slate-900">If that window is not actively supported, disengagement becomes predictable.</span>
              <br /><br />
              <span className="font-bold text-slate-900">And predictable disengagement becomes churn.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 text-lg shadow-md text-center"
              >
                See the Instability Exposure
              </a>
              <a 
                href="#video"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 text-lg border-2 border-blue-600 text-center"
              >
                Watch the Breakdown
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* SECTION 2 — VIDEO 3 (AUTHORITY ANCHOR) */}
      <section id="video" className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            This Is Where Clinics Lose Control
          </h2>
          
          {/* Video Player */}
          <div className="rounded-2xl overflow-hidden border-2 border-gray-300 mb-8 sm:mb-12 shadow-xl">
            <video 
              controls 
              className="w-full"
              style={{ aspectRatio: '16/9' }}
              preload="metadata"
            >
              <source src="https://pub-b7435d1b492849b5808ac4c1233e9233.r2.dev/land2-video.mov" type="video/quicktime" />
              <source src="https://pub-b7435d1b492849b5808ac4c1233e9233.r2.dev/land2-video.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
            <p className="text-xl font-semibold text-slate-900">
              The first 60–90 days decide lifetime value.
            </p>
            <p>
              Most clinics believe retention is a downstream metric.
            </p>
            <p className="font-semibold text-slate-900">
              It isn't.
            </p>
            <p>
              It's decided before stability forms.
            </p>
            <p className="text-xl text-slate-900 font-bold">
              By the time churn appears in your dashboard, the damage is already done.
            </p>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <p className="text-lg text-slate-900 font-bold text-center">
              This is happening in your clinic right now.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* SECTION 3 — THE FINANCIAL REALITY */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            Let's Remove the Abstraction
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-teal-50 p-8 sm:p-10 md:p-12 rounded-2xl border-2 border-blue-200 shadow-lg">
            <p className="text-lg text-gray-700 mb-8">If you onboard:</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-700">100 new GLP-1 patients per quarter</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-700">30% early drop-off</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-700">$600 monthly program value</span>
              </div>
            </div>
            
            <div className="border-t-2 border-blue-300 pt-8 mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-4">Quarterly Exposure:</p>
              <p className="text-5xl font-bold text-blue-600 mb-8">$54,000</p>
              
              <p className="text-xl font-semibold text-gray-900 mb-4">Annualized Exposure:</p>
              <p className="text-6xl font-bold text-slate-900 mb-6">$216,000</p>
              <p className="text-lg text-gray-700">in preventable revenue loss.</p>
            </div>
            
            <div className="space-y-3 text-gray-700 font-semibold">
              <p>Over multiple locations?</p>
              <p>Over multiple years?</p>
            </div>
          </div>
          
          <p className="text-center text-xl text-slate-900 font-bold mt-12 max-w-2xl mx-auto leading-relaxed">
            This is not theoretical leakage.
            <br /><br />
            It is measurable instability.
            <br /><br />
            And most clinics never isolate it.
          </p>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* SECTION 4 — OPERATIONAL CONSEQUENCES */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            Operational Consequences
          </h2>
          
          <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Early churn doesn't just reduce revenue.
            <br /><br />
            <span className="font-bold text-slate-900">It destabilizes operations:</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex gap-4 mb-3">
                <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-slate-800 text-xl">Staff Time Diverted Into Volatility Management</h3>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex gap-4 mb-3">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-slate-800 text-xl">Clinical Bandwidth Absorbed by Repetitive Uncertainty</h3>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex gap-4 mb-3">
                <DollarSign className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-slate-800 text-xl">Revenue Cycles Disrupted by Behavioral Disengagement</h3>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex gap-4 mb-3">
                <TrendingDown className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-slate-800 text-xl">Physician Focus Shifted to Preventable Friction</h3>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xl text-slate-900 font-semibold">
              Instability spreads internally before it shows up in retention metrics.
            </p>
            <p className="text-xl text-slate-900 font-bold">
              You feel it before you measure it.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* SECTION 5 — THE STRUCTURAL FAILURE */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            The Structural Failure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">What You Have</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <span>Acquisition pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <span>Clinical protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <span>CRM systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <span>Payment processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <span>Follow-up reminders</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">What You Don't Have</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="font-semibold">Behavioral reinforcement during volatility</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="font-semibold">Structured stabilization during side-effect phases</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="font-semibold">Early disengagement detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="font-semibold">Instability window intervention layer</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl text-slate-900 font-semibold">
              GLP-1 discontinuation is not primarily medical.
            </p>
            <p className="text-xl text-slate-900 font-semibold">
              It is behavioral destabilization.
            </p>
            <p className="text-2xl text-slate-900 font-bold">
              Without intervention during that window, churn becomes statistically predictable.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* SECTION 6 — RETENTIONHEALTH */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            Stability Should Not Be Left to Chance.
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-700 mb-6 text-center">
              RetentionHealth is not a CRM extension.<br />
              Not a reminder tool.<br />
              Not a marketing platform.
            </p>
            <p className="text-2xl text-slate-900 font-bold mb-4 text-center">
              It is a behavioral stabilization engine.
            </p>
            <p className="text-lg text-gray-600 text-center italic mb-8">
              This is a missing system layer.
            </p>
            
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 mb-6">
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-semibold text-slate-900">CRMs track activity.</span> RetentionHealth stabilizes behavior.<br />
                <span className="font-semibold text-slate-900">CRMs remind.</span> RetentionHealth intervenes during volatility.
              </p>
            </div>
            
            <p className="text-base text-gray-700 text-center leading-relaxed">
              RetentionHealth inserts structured behavioral reinforcement at predictable instability moments — side-effect onset, expectation recalibration, motivation drop-off cycles — before disengagement becomes visible in retention metrics.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 sm:p-10 md:p-12 rounded-2xl border-2 border-blue-200 mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">It activates during the early window to:</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Detect disengagement signals</span>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Reinforce adherence behaviors</span>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Reduce uncertainty during side-effect phases</span>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Structure patient engagement before drift begins</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-2 border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-700 text-center font-semibold">
              RetentionHealth reduces repetitive staff intervention rather than increasing it.
            </p>
          </div>
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xl text-slate-900 font-semibold">
              This is front-end revenue protection.
            </p>
            <p className="text-xl text-slate-900 font-bold">
              Not back-end damage control.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* WHY EARLY INSTABILITY IS PREDICTABLE - PROOF ARCHITECTURE */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            Why Early Instability Is Predictable
          </h2>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Early discontinuation is rarely clinical failure — it is unmanaged expectation volatility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <p className="text-base text-gray-700 font-semibold leading-relaxed">
                  Side-effect onset typically occurs within the first dosing cycle
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <p className="text-base text-gray-700 font-semibold leading-relaxed">
                  Expectation misalignment peaks within the first 30–45 days
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <p className="text-base text-gray-700 font-semibold leading-relaxed">
                  Motivation volatility increases when results lag expectations
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto bg-white border-2 border-slate-300 rounded-xl p-8">
            <p className="text-base text-gray-700 text-center italic">
              This is not messaging cadence optimization. It is behavioral sequencing aligned to instability phases.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* SECTION 7 — THE SHIFT */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 tracking-tight">
              The Shift
            </h2>
            
            <div className="space-y-6 text-xl">
              <p className="text-gray-700">
                Acquisition grows revenue.
              </p>
              <p className="text-slate-900 font-bold text-2xl">
                Stabilization protects it.
              </p>
              <p className="text-gray-700 font-semibold">
                Without engineered stabilization, you are buying patients you cannot hold.
              </p>
              <p className="text-slate-900 font-bold text-2xl">
                If stabilization is not engineered, you are funding churn.
              </p>
              <p className="text-slate-900 font-bold text-2xl">
                RetentionHealth closes the instability gap before it compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* PROOF FRAMEWORK - HOW STABILIZATION IS MEASURED */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            How Stabilization Is Measured
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              RetentionHealth is not measured by promises.
              <br />
              It is measured by behavioral leading indicators that precede revenue outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="font-bold text-slate-800 text-xl mb-4">Behavioral Leading Indicators</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Average refill timing variance compared to baseline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Week 2 and Week 4 engagement confirmation rate vs. historical average</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Response consistency during early dosing cycles</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="font-bold text-slate-800 text-xl mb-4">Operational Load Reduction</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Tracked reduction in volatility-triggered support interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Measured decrease in repetitive uncertainty inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Staff intervention frequency per new patient cohort</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="font-bold text-slate-800 text-xl mb-4">Early-Window Drop-Off Rate</h3>
              <p className="text-gray-700 mb-3">
                Measured as percentage reduction in 90-day discontinuation
              </p>
              <p className="text-sm text-gray-600 italic">
                This is the primary revenue continuity metric
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="font-bold text-slate-800 text-xl mb-4">Revenue Continuity Delta</h3>
              <p className="text-gray-700 mb-3">
                Calculated as retained revenue per stabilized cohort
              </p>
              <p className="text-sm text-gray-600 italic">
                Measured against baseline early-window churn
              </p>
            </div>
          </div>
          
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-8 sm:p-10 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              60–90 Day Early-Window Stabilization Pilot
            </h3>
            <p className="text-base text-gray-700 mb-4 text-center">
              Measured inside a controlled pilot structure:
            </p>
            <p className="text-sm text-gray-600 mb-6 text-center italic">
              Cohorts are matched by intake timing and patient profile to ensure valid comparison.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="font-semibold text-slate-800 mb-2">Cohort A</p>
                <p className="text-sm text-gray-600">Standard process</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                <p className="font-semibold text-slate-800 mb-2">Cohort B</p>
                <p className="text-sm text-gray-600">RetentionHealth stabilization layer</p>
              </div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
              <p className="text-sm text-gray-700 font-semibold text-center">
                Designed for single-location validation, built for multi-location scaling.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold">Timeframe:</span> Leading indicators appear within the first 30 days. Revenue continuity delta becomes measurable by day 60–90.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-300 rounded-2xl p-8 sm:p-10 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
              Economic Validation Threshold
            </h3>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              If early instability is reduced by even <span className="font-bold text-slate-900">10%</span>, the system self-funds.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-base text-gray-700 italic">
              These are not promises. These are measurable outputs from a controlled stabilization intervention.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white border-2 border-blue-200 rounded-xl p-6">
            <p className="text-sm text-gray-700 text-center font-semibold">
              RetentionHealth integrates into the early-window process without adding new manual workflows for clinical staff.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500"></div>

      {/* CALCULATOR SECTION */}
      <section id="calculator" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-4 text-center tracking-tight">
            Quantify Your 90-Day Instability Exposure
          </h2>
          <p className="text-xl text-gray-700 mb-3 text-center max-w-3xl mx-auto">
            The early GLP-1 window determines lifetime value.
          </p>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Most clinics underestimate how much revenue destabilizes during this period.
          </p>
          <p className="text-base text-gray-600 mb-4 text-center font-semibold">
            Enter your real numbers. This takes less than 30 seconds.
          </p>
          <p className="text-sm text-gray-600 mb-12 text-center italic">
            Even clinics with strong overall retention often see hidden volatility inside the first 90 days.
          </p>
          
          {/* Calculator Form - Premium Diagnostic Console */}
          <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-10 rounded-2xl border-2 border-slate-300 shadow-2xl mb-16">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3 tracking-wide uppercase">
                  New GLP-1 Patients Per Month
                </label>
                <p className="text-xs text-gray-600 mb-4">
                  Only include new program starts. Do not include existing stable patients.
                </p>
                <input
                  type="number"
                  value={patientsPerMonth}
                  onChange={(e) => setPatientsPerMonth(Number(e.target.value))}
                  className="w-full px-5 py-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-semibold text-slate-900"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3 tracking-wide uppercase">
                  Average Monthly Program Revenue Per Patient
                </label>
                <p className="text-xs text-gray-600 mb-4">
                  Medication + consult + subscription fees combined.
                </p>
                <div className="relative">
                  <span className="absolute left-5 top-4 text-xl font-semibold text-slate-600">$</span>
                  <input
                    type="number"
                    value={avgMonthlyRevenue}
                    onChange={(e) => setAvgMonthlyRevenue(Number(e.target.value))}
                    className="w-full pl-10 pr-5 py-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-semibold text-slate-900"
                    min="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3 tracking-wide uppercase">
                  Early Instability Drop-Off Rate (First 90 Days)
                </label>
                <p className="text-xs text-gray-600 mb-4">
                  If unknown, most clinics fall between 25–35%.
                </p>
                <div className="relative">
                  <input
                    type="number"
                    value={earlyChurnRate}
                    onChange={(e) => setEarlyChurnRate(Number(e.target.value))}
                    className="w-full px-5 py-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-semibold text-slate-900"
                    min="0"
                    max="100"
                  />
                  <span className="absolute right-5 top-4 text-xl font-semibold text-slate-600">%</span>
                </div>
              </div>
              
              {/* Multi-Location Toggle */}
              <div className="border-t-2 border-slate-200 pt-8 mt-8">
                <div className="flex items-center justify-between mb-6">
                  <label className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                    Multi-Location Operator?
                  </label>
                  <button
                    onClick={() => setIsMultiLocation(!isMultiLocation)}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                      isMultiLocation ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        isMultiLocation ? 'translate-x-9' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                {isMultiLocation && (
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3 tracking-wide uppercase">
                      Number of Locations
                    </label>
                    <input
                      type="number"
                      value={numLocations}
                      onChange={(e) => setNumLocations(Math.max(1, Number(e.target.value)))}
                      className="w-full px-5 py-4 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-semibold text-slate-900"
                      min="1"
                    />
                  </div>
                )}
              </div>
              
              <button
                onClick={handleCalculate}
                className="w-full bg-slate-900 text-white px-8 py-5 rounded-lg font-bold hover:bg-slate-800 text-xl shadow-lg mt-6 tracking-wide"
              >
                REVEAL MY INSTABILITY EXPOSURE
              </button>
            </div>
          </div>
          
          {/* Results Section - Financial Briefing */}
          {showResults && (
            <div className="max-w-3xl mx-auto w-full px-2">
              <div className="bg-slate-900 text-white p-8 rounded-t-2xl">
                <h3 className="text-2xl font-bold text-center tracking-wide uppercase">
                  Your 90-Day Instability Exposure
                </h3>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="bg-white p-4 sm:p-6 md:p-10 border-2 border-slate-300 shadow-lg overflow-hidden">
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 font-bold tracking-wide uppercase">
                    Estimated Monthly Revenue Lost to Early Instability
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 break-words">
                    ${monthlyLoss.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This revenue destabilizes during the first 90 days — before long-term retention ever forms.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-10 border-2 border-red-300 shadow-xl overflow-hidden">
                  <p className="text-xs sm:text-sm text-slate-900 mb-3 font-bold tracking-wide uppercase">
                    Projected Annual Revenue at Risk
                  </p>
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4 break-words">
                    ${annualLoss.toLocaleString()}
                  </p>
                  <p className="text-base text-slate-900 font-bold mb-4">
                    This revenue destabilizes before retention ever has a chance to form.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    This is structural erosion, not marketing inefficiency.
                    It occurs inside the early instability window described in the breakdown above.
                  </p>
                </div>
              </div>
              
              {/* Cost of Inaction */}
              <div className="bg-slate-900 text-white p-4 sm:p-6 md:p-10 rounded-2xl mb-12 border-2 border-slate-700 shadow-2xl overflow-hidden">
                <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center tracking-wide uppercase">
                  If Nothing Changes
                </h4>
                <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-center text-gray-300">Over 3 Years:</p>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 break-words px-2">
                  ${threeYearLoss.toLocaleString()}
                </p>
                <p className="text-center text-gray-400 text-xs sm:text-sm px-2">
                  in cumulative instability exposure.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 mb-12">
                <p className="text-xl text-slate-900 font-semibold mb-6 text-center leading-relaxed">
                  Retention is not decided at month six.
                  <br /><br />
                  It is decided during the first cycle of uncertainty.
                  <br /><br />
                  If instability is not stabilized, churn is predictable.
                  <br /><br />
                  And predictable churn is preventable.
                </p>
              </div>
              
              {/* Stabilization Projection with Confidence Lever */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-10 rounded-2xl border-2 border-blue-200 mb-12">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                  Recovered Annual Revenue Potential
                </h4>
                <p className="text-center text-gray-700 mb-8 font-semibold">
                  If Early Instability Were Reduced By:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-blue-200 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">10%</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">Reduction</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">
                      ${recoveredRevenue10.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">Recovered annually</p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-blue-400 text-center shadow-lg">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">15%</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">Reduction</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">
                      ${recoveredRevenue15.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">Recovered annually</p>
                  </div>
                  
                  <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-blue-200 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">20%</p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">Reduction</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-900">
                      ${recoveredRevenue20.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-6">
                <p className="text-base text-slate-900 font-bold text-center">
                  Even a modest stabilization shift materially changes continuity.
                </p>
              </div>
            </div>
            
            {/* Pricing Context & Psychological Softener */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white border-2 border-slate-300 rounded-xl p-8 mb-6">
                <p className="text-base text-gray-700 text-center leading-relaxed">
                  RetentionHealth is priced relative to annual instability exposure and designed to self-fund with modest stabilization impact.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-sm text-gray-700 text-center">
                  Most operators fall within a five- to six-figure annual investment range relative to their exposure and scale.
                </p>
              </div>
            </div>
            
            {/* Transition to CTA */}
            <div className="text-center max-w-2xl mx-auto mb-12 w-full px-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Stability Must Be Engineered — Not Assumed.
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Most clinics invest heavily in acquisition.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Few invest in early behavioral stabilization.
                </p>
                <p className="text-xl text-slate-900 font-bold mb-8">
                  Without engineered support during volatility, you are funding churn.
                </p>
                
                <button
                  onClick={() => setIsSummaryModalOpen(true)}
                  className="inline-block bg-blue-600 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 rounded-lg font-bold hover:bg-blue-700 text-base sm:text-lg md:text-xl shadow-2xl transition-colors"
                >
                  Send Me My Executive Exposure Summary
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="h-px bg-gray-200"></div>

      {/* COMPETITIVE POSITIONING SECTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-slate-900 mb-8 text-center tracking-tight">
            The Clinics That Win the Next Phase
          </h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-700 mb-6 text-center leading-relaxed">
              The next generation of GLP-1 platforms will not win on acquisition alone.
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center">
              They will win on:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">Stabilization Efficiency</h3>
                  <p className="text-gray-600">Early-window behavioral reinforcement at scale</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">Lifetime Value Protection</h3>
                  <p className="text-gray-600">Revenue continuity engineered from day one</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">Staff Bandwidth Preservation</h3>
                  <p className="text-gray-600">Clinical focus on outcomes, not volatility management</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">Predictable Continuity</h3>
                  <p className="text-gray-600">Cohort retention becomes a controlled variable</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl text-slate-900 font-semibold">
              Early-window stabilization will separate growth clinics from churn clinics.
            </p>
            <p className="text-2xl text-slate-900 font-bold">
              RetentionHealth is the system layer that defines that separation.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500"></div>

      {/* SECTION 8 — EXECUTIVE CALL TO ACTION */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold mb-8 tracking-tight">
            Quantify Your 90-Day Exposure.
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl mb-6 opacity-90">
              We will calculate:
            </p>
            <ul className="space-y-3 text-lg text-left">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Your early instability rate</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Revenue at risk</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Projected annualized leakage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Stabilization impact potential</span>
              </li>
            </ul>
          </div>
          
          <p className="text-2xl font-bold mb-8">
            This is not a demo.
            <br /><br />
            It is a risk assessment.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-white/90 italic">
              If these numbers feel higher than expected, you are not alone.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-lg font-bold hover:bg-gray-100 text-xl shadow-2xl"
            >
              Stabilize My Early Window
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-700 text-white px-12 py-5 rounded-lg font-bold hover:bg-blue-800 text-xl border-2 border-white shadow-2xl"
            >
              Schedule Executive Review
            </button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-teal-500"></div>

      <PilotModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <ExecutiveSummaryModal 
        isOpen={isSummaryModalOpen} 
        onClose={() => setIsSummaryModalOpen(false)}
        calculatorData={{
          patientsPerMonth,
          avgMonthlyRevenue,
          earlyChurnRate,
          numLocations,
          monthlyLoss,
          annualLoss,
          threeYearLoss,
        }}
      />
    </div>
  );
}
