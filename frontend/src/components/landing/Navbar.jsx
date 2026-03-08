"use client";
import Link from 'next/link';
import { useAuth } from '../../lib/firebase/AuthContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <nav className="w-full pt-8 pb-4">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-1 justify-center items-end h-6">
              <div className="w-[3px] bg-primary/60 h-2 rounded-full"></div>
              <div className="w-[3px] bg-primary/80 h-4 rounded-full"></div>
              <div className="w-[3px] bg-primary h-6 rounded-full"></div>
              <div className="w-[3px] bg-primary/80 h-4 rounded-full"></div>
              <div className="w-[3px] bg-primary/60 h-2 rounded-full"></div>
            </div>
          </div>
          <span className="font-bold text-2xl tracking-tight text-dark">Omlytics</span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
          <Link href="#" className="text-dark">Home</Link>
          <Link href="#about" className="hover:text-dark transition-colors">About</Link>
          <Link href="#features" className="hover:text-dark transition-colors">Features</Link>
          <Link href="#download" className="hover:text-dark transition-colors">Download</Link>
          <Link href="#pricing" className="hover:text-dark transition-colors">Pricing</Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 font-medium text-dark text-[15px]">
            <span>416-887-3186</span>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-dark font-medium hover:text-primary transition-colors">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="px-6 py-2.5 btn-primary">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="px-6 py-2.5 btn-outline bg-transparent">
                Login
              </Link>
              <Link href="/signup" className="px-6 py-2.5 btn-primary shadow-sm">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
