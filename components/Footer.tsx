import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src="/retention logo 1.png" 
              alt="Retention Health" 
              className="h-7 mb-4"
            />
            <p className="text-sm text-gray-600">
              Retention infrastructure for subscription-based healthcare programs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pilot" className="text-sm text-gray-600 hover:text-gray-900">
                  Pilot Program
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-600 hover:text-gray-900">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                <strong>Contact:</strong>{' '}
                <a href="mailto:contact@retentionhealth.com" className="hover:text-gray-900">
                  contact@retentionhealth.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> 302 Arapahoe Ave, Boulder, CO 80301
              </p>
            </div>
            
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Retention Health
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Medical Disclaimer:</strong> Retention Health provides behavioral nutrition support tools 
              and does not replace medical advice, clinical decision-making, or prescribing decisions. 
              Programs are responsible for maintaining clinical oversight of patient care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
