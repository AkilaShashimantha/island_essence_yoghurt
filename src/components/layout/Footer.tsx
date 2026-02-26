'use client';

import Link from 'next/link';
import { Leaf, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: '#0f3d22' }} className="text-white">
            {/* Top wave */}
            <div className="overflow-hidden leading-none">
                <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
                    <path d="M0,0 C480,60 960,60 1440,0 L1440,0 L0,0 Z" fill="#F5F0E8" />
                </svg>
            </div>

            <div className="container-custom py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-full bg-[#D4A843] flex items-center justify-center">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="font-bold text-lg block" style={{ fontFamily: 'Playfair Display' }}>
                                    Island Essence
                                </span>
                                <span className="text-[10px] tracking-widest uppercase text-[#D4A843]">
                                    Coconut Yogurt
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-green-200 leading-relaxed mb-5">
                            Handcrafted in Sri Lanka. 100% vegan, probiotic-rich coconut milk yogurt with no preservatives or artificial additives.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: Instagram, href: '#', label: 'Instagram' },
                                { icon: Facebook, href: '#', label: 'Facebook' },
                                { icon: Twitter, href: '#', label: 'Twitter' },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-green-600 flex items-center justify-center text-green-300 hover:bg-[#D4A843] hover:border-[#D4A843] hover:text-white transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-[#D4A843] mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { href: '/products', label: 'Our Products' },
                                { href: '/about', label: 'About Us' },
                                { href: '/sustainability', label: 'Sustainability' },
                                { href: '/faq', label: 'FAQ' },
                                { href: '/contact', label: 'Contact Us' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-green-200 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* My Account */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-[#D4A843] mb-4">
                            My Account
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { href: '/auth/login', label: 'Login' },
                                { href: '/auth/register', label: 'Register' },
                                { href: '/account/orders', label: 'My Orders' },
                                { href: '/cart', label: 'Shopping Cart' },
                                { href: '/checkout', label: 'Checkout' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-green-200 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-[#D4A843] mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-green-200">
                                <MapPin className="w-4 h-4 mt-0.5 text-[#D4A843] shrink-0" />
                                Colombo 1–7, Sri Lanka (Phase 01 delivery zone)
                            </li>
                            <li className="flex items-center gap-3 text-sm text-green-200">
                                <Phone className="w-4 h-4 text-[#D4A843] shrink-0" />
                                +94 77 123 4567
                            </li>
                            <li className="flex items-center gap-3 text-sm text-green-200">
                                <Mail className="w-4 h-4 text-[#D4A843] shrink-0" />
                                hello@islandessence.lk
                            </li>
                        </ul>

                        {/* Email CTA */}
                        <div className="mt-6">
                            <p className="text-xs text-green-300 mb-2">Get recipes &amp; offers in your inbox</p>
                            <div className="h-2" ></div>
                            <a
                                href="mailto:hello@islandessence.lk"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white/10 border border-green-600 text-white hover:border-[#D4A843] hover:bg-white/20 transition-all"
                            >
                                <Mail className="w-4 h-4 text-[#D4A843] shrink-0" />
                                hello@islandessence.lk
                            </a>
                        </div>
                        <div className="h-2" ></div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-green-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-green-400">
                    <p>© {currentYear} Island Essence Coconut Yogurt – Team Spark. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
