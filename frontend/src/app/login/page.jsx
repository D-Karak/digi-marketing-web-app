"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/firebase/AuthContext';
import Link from 'next/link';
import Image from 'next/image';
import AuthImageSlider from '../../components/auth/AuthImageSlider';
import { Eye, EyeOff } from 'lucide-react';
import { getFirebaseErrorMessage } from '../../utils/firebase-errors';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login, googleProvider, appleProvider, user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.push('/dashboard');
        }
    }, [user, loading, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            await login(email, password);
            router.push('/dashboard');
        } catch (err) {
            setError(getFirebaseErrorMessage(err));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSocialLogin = async (providerFunc) => {
        try {
            setError('');
            await providerFunc();
            router.push('/dashboard');
        } catch (err) {
            setError(getFirebaseErrorMessage(err));
        }
    };

    return (
        <div className="flex w-full bg-white overflow-hidden min-h-screen transition-all duration-500 ease-in-out">
            {/* Left side: Animated Image Slider Component */}
            <AuthImageSlider title={<>Welcome Back to<br />Omlytics Platform</>} />

            {/* Right side: Form */}
            <div className="w-full lg:w-[52%] px-6 py-12 sm:p-12 lg:px-24 lg:py-20 flex flex-col justify-center bg-white relative z-20 transition-all duration-500 ease-in-out lg:shadow-none shadow-2xl rounded-t-[3rem] lg:rounded-none mt-20 lg:mt-0">
                <h1 className="text-[40px] font-semibold text-dark mb-2 tracking-tight">Log in to your account</h1>
                <p className="text-gray-500 mb-10 text-[15px]">
                    Don&apos;t have an account? <Link href="/signup" className="text-primary hover:text-primary-hover transition-colors font-medium">Sign up</Link>
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl">
                            <p className="text-sm text-primary font-medium">{error}</p>
                        </div>
                    )}

                    {/* Email */}
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full bg-light border border-gray-200 rounded-xl px-5 py-4 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-sm"
                    />

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full bg-light border border-gray-200 rounded-xl px-5 py-4 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-sm"
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-2" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                        </button>
                    </div>

                    <div className="flex justify-end pt-1">
                        <a href="#" className="text-sm text-gray-500 hover:text-dark transition-colors font-medium">Forgot password?</a>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white font-medium rounded-xl py-4 mt-2 hover:bg-primary-hover transition-colors shadow-md shadow-primary/20 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Logging in...' : 'Log in'}
                    </button>

                    <div className="relative flex items-center justify-center py-6">
                        <div className="border-t border-gray-200 absolute w-full left-0"></div>
                        <span className="bg-white px-4 text-sm font-medium text-gray-500 relative z-10">Or log in with</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button type="button" onClick={() => handleSocialLogin(googleProvider)} className="w-full sm:w-1/2 flex items-center justify-center gap-3 border border-gray-200 bg-white rounded-xl py-3.5 text-dark hover:bg-gray-50 transition-colors font-medium shadow-sm">
                            <Image src="/images/google-48.png" alt="google" width={24} height={24} />
                            Google
                        </button>
                        <button type="button" onClick={() => handleSocialLogin(appleProvider)} className="w-full sm:w-1/2 flex items-center justify-center gap-3 border border-gray-200 bg-white rounded-xl py-3.5 text-dark hover:bg-gray-50 transition-colors font-medium shadow-sm">
                            <Image src="/images/apple-50.png" alt="apple" width={24} height={24} />
                            Apple
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
