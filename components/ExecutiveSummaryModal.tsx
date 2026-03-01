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
  const [step, setStep] = useState(1); // 1: contact info, 2: scheduling
  const [schedulingPreferences, setSchedulingPreferences] = useState<Array<{date: string, time: string}>>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleContinueToScheduling = () => {
    if (!name || !email) return;
    setStep(2);
  };

  const addSchedulingPreference = () => {
    if (!selectedDate || !selectedTime) return;
    if (schedulingPreferences.length >= 3) return;
    
    setSchedulingPreferences([...schedulingPreferences, { date: selectedDate, time: selectedTime }]);
    setSelectedDate('');
    setSelectedTime('');
  };

  const removePreference = (index: number) => {
    setSchedulingPreferences(schedulingPreferences.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!name || !email || schedulingPreferences.length === 0) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hidden-sunset-a7b4retentionhealth-executive-summary.vic-76c.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          calculatorData,
          schedulingPreferences,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
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
      setStep(1);
      setSchedulingPreferences([]);
      setSelectedDate('');
      setSelectedTime('');
    }
    onClose();
  };

  // Generate next 14 days for date picker
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Business hours time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
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
              {step === 1 ? (
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
                    onClick={handleContinueToScheduling}
                    disabled={!name || !email}
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Continue to Scheduling
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => setStep(1)}
                    className="text-blue-600 hover:text-blue-700 mb-4 flex items-center text-sm font-semibold"
                  >
                    ← Back
                  </button>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    Select Your Preferred Times
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Choose up to 3 time slots that work best for your 20-minute executive review.
                  </p>

                  {/* Date Picker */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Select Date
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Choose a date...</option>
                      {getAvailableDates().map((date, idx) => (
                        <option key={idx} value={date.toISOString().split('T')[0]}>
                          {formatDate(date)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Time Picker */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Select Time (Your Local Time)
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={!selectedDate}
                    >
                      <option value="">Choose a time...</option>
                      {timeSlots.map((time, idx) => (
                        <option key={idx} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={addSchedulingPreference}
                    disabled={!selectedDate || !selectedTime || schedulingPreferences.length >= 3}
                    className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors mb-6"
                  >
                    + Add Time Preference ({schedulingPreferences.length}/3)
                  </button>

                  {/* Selected Preferences */}
                  {schedulingPreferences.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-slate-800 mb-3">
                        Your Preferred Times:
                      </p>
                      <div className="space-y-2">
                        {schedulingPreferences.map((pref, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div>
                              <span className="text-xs font-semibold text-blue-600 mr-2">
                                {idx === 0 ? '1st Choice' : idx === 1 ? '2nd Choice' : '3rd Choice'}
                              </span>
                              <span className="text-sm text-slate-900">
                                {formatDate(new Date(pref.date))} at {pref.time}
                              </span>
                            </div>
                            <button
                              onClick={() => removePreference(idx)}
                              className="text-red-500 hover:text-red-700 text-sm font-semibold"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                    <p className="text-xs text-gray-600 text-center">
                      We&apos;ll confirm the best time from your preferences within 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={schedulingPreferences.length === 0 || isSubmitting}
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Scheduling Request'}
                  </button>
                </div>
              )}
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
                Your Request Has Been Received
              </h2>
              <p className="text-base text-gray-700 mb-4">
                We&apos;ll review your scheduling preferences and confirm the best time within 24 hours.
              </p>
              
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-900 font-semibold mb-2">
                  📧 Watch for our email from contact@retentionhealth.com
                </p>
                <p className="text-xs text-gray-600">
                  Please check your spam/junk folder if you don&apos;t see it in your inbox.
                </p>
              </div>
              
              <button
                onClick={handleClose}
                className="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Got It
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
