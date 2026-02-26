'use client';

import Link from 'next/link';

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-[#F5F0E8]/50 py-16 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-[12px] shadow-lg p-8 animate-scale-in">
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-full bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🔑</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                            Reset Password
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Enter your email and we'll send a reset link (valid 30 min)</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Email Address</label>
                            <input type="email" className="input-field" placeholder="you@example.com" required />
                        </div>
                        <button type="submit" className="btn-primary w-full py-3 text-sm">
                            Send Reset Link
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Remembered your password?{' '}
                        <Link href="/auth/login" className="text-[#1B6B3A] font-semibold hover:underline">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
