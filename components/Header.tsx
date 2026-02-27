'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/retention logo 1.png" 
              alt="Retention Health" 
              className="h-14 sm:h-16"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="/#problem" className="text-gray-600 hover:text-gray-900">
              How It Helps
            </a>
            <a href="/#revenue" className="text-gray-600 hover:text-gray-900">
              Revenue Impact
            </a>
            <a href="/#solution" className="text-gray-600 hover:text-gray-900">
              Solution
            </a>
            <a href="/#pilot" className="text-gray-600 hover:text-gray-900">
              Pilot
            </a>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/security" className="text-gray-600 hover:text-gray-900">
              Security
            </Link>
            <a 
              href="mailto:contact@retentionhealth.com"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 font-medium">
            <div className="flex flex-col space-y-3">
              <a 
                href="/#problem" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Helps
              </a>
              <a 
                href="/#revenue" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Revenue Impact
              </a>
              <a 
                href="/#solution" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solution
              </a>
              <a 
                href="/#pilot" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pilot
              </a>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/security" 
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </Link>
              <a 
                href="mailto:contact@retentionhealth.com"
                className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 text-center"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
