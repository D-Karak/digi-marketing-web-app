"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../lib/firebase/AuthContext';
import { auth } from '../lib/firebase/config';
import { sendEmailVerification } from 'firebase/auth';

export default function ProtectedRoute({ children }) {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    const [resending, setResending] = useState(false);
    const [resendMessage, setResendMessage] = useState('');

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-light">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (user && !user.emailVerified) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify your email</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We sent a verification link to <span className="font-semibold text-gray-900">{user.email}</span>.
                        Please check your inbox (and spam folder) to verify your account so you can access the dashboard.
                    </p>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={async () => {
                                if (auth.currentUser) {
                                    await auth.currentUser.reload();
                                    window.location.reload();
                                }
                            }}
                            className="w-full bg-primary hover:bg-black text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200"
                        >
                            I've verified my email
                        </button>
                        <button
                            onClick={async () => {
                                if (!auth.currentUser) return;
                                setResending(true);
                                try {
                                    await sendEmailVerification(auth.currentUser);
                                    setResendMessage('A fresh verification link has been sent!');
                                } catch (error) {
                                    setResendMessage('Please wait a minute before requesting another email.');
                                } finally {
                                    setResending(false);
                                }
                            }}
                            disabled={resending}
                            className="w-full bg-white border-2 border-primary text-primary hover:bg-primary/5 font-medium py-3 px-4 rounded-xl transition-colors duration-200"
                        >
                            {resending ? 'Sending...' : 'Resend Verification Email'}
                        </button>
                        {resendMessage && (
                            <p className="text-sm text-green-600 font-medium">
                                {resendMessage}
                            </p>
                        )}
                        <button
                            onClick={async () => {
                                await logout();
                                router.push('/login');
                            }}
                            className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors mt-2"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return user ? children : null;
}
