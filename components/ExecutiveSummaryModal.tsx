'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  calculatorData: {
    patientsPerMonth: number;
    avgMonthlyRevenue: number;
    earlyChurnRate: number;
    numLocations: number;
    monthlyLoss: number;
    annualLoss: number;
    threeYearLoss: number;
  };
}

export default function ExecutiveSummaryModal({ isOpen, onClose, calculatorData }: ExecutiveSummaryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://retentionhealth-executive-summary.vicsicard.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          calculatorData,
          source: 'land2',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error('Failed to submit');
      }

      const result = await response.json();
      console.log('Submission successful:', result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting:', error);
      alert('There was an error submitting your request. Please try again or email us directly at contact@retentionhealth.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitted) {
      setIsSubmitted(false);
      setName('');
      setEmail('');
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
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Executive Exposure Summary
              </h2>
              <p className="text-gray-600 mb-6">
                We will prepare a detailed briefing based on your exposure analysis.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-xs text-gray-600 text-center">
                  Your information is confidential and used solely for preparing your exposure briefing.
                </p>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!name || !email || isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Preparing...' : 'Send Me My Executive Summary'}
              </button>
            </div>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Your Executive Exposure Summary Has Been Prepared
              </h2>
              <p className="text-base text-gray-700 mb-8">
                We recommend reviewing this in a 20-minute strategic session.
              </p>
              
              <div className="space-y-3">
                <a
                  href="https://calendly.com/retentionhealth/executive-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Executive Review
                </a>
                <button
                  onClick={handleClose}
                  className="block w-full bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  I&apos;ll Review This Internally First
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
