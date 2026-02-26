'use client';

import Link from 'next/link';

export default function RegisterPage() {
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#F5F0E8]/50 py-16 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-[12px] shadow-lg p-8 animate-scale-in">
                    <div className="text-center mb-8">
                        <div className="w-14 h-14 rounded-full bg-[#1B6B3A]/10 flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl">🌿</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                            Create Account
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">Join Island Essence and order your first yogurt</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">First Name</label>
                                <input type="text" className="input-field" placeholder="Dilini" required />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Last Name</label>
                                <input type="text" className="input-field" placeholder="Perera" required />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Email Address</label>
                            <input type="email" className="input-field" placeholder="you@example.com" required />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Phone Number</label>
                            <input type="tel" className="input-field" placeholder="+94 77 123 4567" required />
                            <p className="text-xs text-gray-400 mt-1">OTP verification will be sent to this number</p>
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Password</label>
                            <input type="password" className="input-field" placeholder="Minimum 8 characters" required minLength={8} />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Confirm Password</label>
                            <input type="password" className="input-field" placeholder="••••••••" required />
                        </div>

                        <div className="flex items-start gap-2 text-xs text-gray-500">
                            <input type="checkbox" className="mt-0.5 rounded" required />
                            <span>I agree to the <Link href="/terms" className="text-[#1B6B3A] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#1B6B3A] hover:underline">Privacy Policy</Link></span>
                        </div>

                        <button type="submit" className="btn-primary w-full py-3 text-sm mt-2">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-[#1B6B3A] font-semibold hover:underline">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
