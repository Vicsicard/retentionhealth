import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Retention Health
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/security" className="text-sm text-gray-600 hover:text-gray-900">
              Security
            </Link>
            <Link href="/pilot" className="text-sm text-gray-600 hover:text-gray-900">
              Pilot
            </Link>
            <a 
              href="mailto:contact@retentionhealth.com"
              className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
