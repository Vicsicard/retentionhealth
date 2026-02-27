'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft } from 'lucide-react';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  clinicName: string;
  yourName: string;
  workEmail: string;
  activePatients: string;
  monthlyFee: string;
  pilotInterest: string;
  biggestFriction: string;
}

const STORAGE_KEY = 'pilot_modal_data';

export default function PilotModal({ isOpen, onClose }: PilotModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    clinicName: '',
    yourName: '',
    workEmail: '',
    activePatients: '',
    monthlyFee: '',
    pilotInterest: '',
    biggestFriction: '',
  });

  // Load saved data from localStorage
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFormData(parsed);
        } catch {
          // Ignore parse errors
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Save to localStorage on change
  useEffect(() => {
    if (isOpen && !isSubmitted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isOpen, isSubmitted]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/pilot-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Clear localStorage on success
      localStorage.removeItem(STORAGE_KEY);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or email us directly at contact@retentionhealth.com');
    }
  };

  const handleClose = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        clinicName: '',
        yourName: '',
        workEmail: '',
        activePatients: '',
        monthlyFee: '',
        pilotInterest: '',
        biggestFriction: '',
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={handleClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Progress indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-800">
                    Step {step} of 3
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Clinic Basics */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Clinic Basics
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Used to schedule a pilot discussion and send a confirmation.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Clinic name
                      </label>
                      <input
                        type="text"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        value={formData.yourName}
                        onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Work email
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!formData.clinicName || !formData.yourName || !formData.workEmail}
                    className="w-full mt-8 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Step 2: Program Size */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Program Size
                  </h2>
                  <p className="text-gray-600 mb-6">
                    This helps us model retention impact.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Active GLP-1 patients
                      </label>
                      <select
                        value={formData.activePatients}
                        onChange={(e) => setFormData({ ...formData, activePatients: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      >
                        <option value="">Select range</option>
                        <option value="300-800">300–800</option>
                        <option value="800-1500">800–1,500</option>
                        <option value="1500-3000">1,500–3,000</option>
                        <option value="3000-5000">3,000–5,000</option>
                        <option value="5000+">5,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Average monthly program fee
                      </label>
                      <select
                        value={formData.monthlyFee}
                        onChange={(e) => setFormData({ ...formData, monthlyFee: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select range</option>
                        <option value="<$200">&lt;$200</option>
                        <option value="$200-$399">$200–$399</option>
                        <option value="$400-$599">$400–$599</option>
                        <option value="$600+">$600+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-gray-900 font-semibold"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!formData.activePatients || !formData.monthlyFee}
                      className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Pilot Intent */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Pilot Intent
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Help us understand your priorities.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Interested in a 60-day pilot?
                      </label>
                      <select
                        value={formData.pilotInterest}
                        onChange={(e) => setFormData({ ...formData, pilotInterest: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      >
                        <option value="">Select option</option>
                        <option value="Yes">Yes</option>
                        <option value="Exploring">Exploring</option>
                        <option value="Not yet">Not yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Biggest month-one friction
                      </label>
                      <select
                        value={formData.biggestFriction}
                        onChange={(e) => setFormData({ ...formData, biggestFriction: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Pick one</option>
                        <option value="early cancellations">Early cancellations</option>
                        <option value="support inbox volume">Support inbox volume</option>
                        <option value="nausea/food tolerance">Nausea/food tolerance</option>
                        <option value="adherence/protein issues">Adherence/protein issues</option>
                        <option value="unsure / want to discuss">Unsure / want to discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-4 text-gray-600 hover:text-gray-900 font-semibold"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!formData.pilotInterest || !formData.biggestFriction}
                      className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Request Received
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Thanks — we&apos;ll reach out within 1 business day to schedule a discussion.
              </p>
              <button
                onClick={handleClose}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
