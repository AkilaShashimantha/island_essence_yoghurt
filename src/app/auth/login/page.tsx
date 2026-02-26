'use client';

import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F5F0E8]/50 py-16 px-4">
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white rounded-[12px] shadow-lg p-8 animate-scale-in">
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-full bg-[#1B6B3A]/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🥛</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                            Welcome Back
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Sign in to your Island Essence account</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Email Address</label>
                            <input type="email" className="input-field" placeholder="you@example.com" required />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Password</label>
                            <input type="password" className="input-field" placeholder="••••••••" required />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                                <input type="checkbox" className="rounded" />
                                Remember me
                            </label>
                            <Link href="/auth/forgot-password" className="text-[#1B6B3A] font-medium hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button type="submit" className="btn-primary w-full py-3 text-sm mt-2">
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?{' '}
                        <Link href="/auth/register" className="text-[#1B6B3A] font-semibold hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
