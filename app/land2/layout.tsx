import Link from 'next/link';

export default function Land2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* MINIMAL HEADER - Logo Only */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold text-blue-600">RetentionHealth</h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} RetentionHealth. Early-Window Stabilization for GLP-1 Programs.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="/" className="text-sm text-gray-600 hover:text-blue-600">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
