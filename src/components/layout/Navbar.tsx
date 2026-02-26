'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, User, Leaf, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/lib/store/cartStore';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { toggleCart, getTotalItems } = useCartStore();
    const totalItems = getTotalItems();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Products' },
        { href: '/about', label: 'About' },
        { href: '/sustainability', label: 'Sustainability' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-sm'
                        : 'bg-gradient-to-b from-black/30 to-transparent'
                    }`}
            >
                <nav className="container-custom flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-full bg-[#1B6B3A] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <Leaf className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span
                                className="font-bold text-lg leading-tight block"
                                style={{ fontFamily: 'Playfair Display', color: scrolled ? '#1B6B3A' : '#ffffff' }}
                            >
                                Island Essence
                            </span>
                            <span className={`text-[10px] tracking-widest uppercase font-semibold -mt-1 block ${scrolled ? 'text-[#D4A843]' : 'text-[#f0c96a]'}`}>
                                Coconut Yogurt
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`text-[15px] font-semibold transition-colors relative group ${scrolled
                                            ? 'text-gray-700 hover:text-[#1B6B3A]'
                                            : 'text-white hover:text-[#f0c96a] drop-shadow-md'
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full ${scrolled ? 'bg-[#1B6B3A]' : 'bg-[#f0c96a]'
                                        }`} />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Icons */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/account"
                            className={`hidden md:flex w-10 h-10 items-center justify-center rounded-full transition-all ${scrolled
                                    ? 'hover:bg-[#F5F0E8] text-gray-600 hover:text-[#1B6B3A]'
                                    : 'text-white hover:bg-white/20'
                                }`}
                            aria-label="My Account"
                        >
                            <User className="w-5 h-5" />
                        </Link>

                        <button
                            onClick={toggleCart}
                            className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-all ${scrolled
                                    ? 'hover:bg-[#F5F0E8] text-gray-600 hover:text-[#1B6B3A]'
                                    : 'text-white hover:bg-white/20'
                                }`}
                            aria-label={`Shopping cart, ${totalItems} items`}
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4A843] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                                    {totalItems > 9 ? '9+' : totalItems}
                                </span>
                            )}
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(true)}
                            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all ${scrolled ? 'hover:bg-[#F5F0E8] text-gray-600' : 'text-white hover:bg-white/20'
                                }`}
                            aria-label="Open menu"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Drawer Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className="absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl animate-slide-in-right flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#1B6B3A] flex items-center justify-center">
                                    <Leaf className="w-4 h-4 text-white" />
                                </div>
                                <span className="font-bold text-[#1B6B3A]" style={{ fontFamily: 'Playfair Display' }}>
                                    Island Essence
                                </span>
                            </div>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            >
                                <X className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex-1 px-4 py-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-[#F5F0E8] hover:text-[#1B6B3A] font-medium transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/account"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl text-gray-700 hover:bg-[#F5F0E8] hover:text-[#1B6B3A] font-medium transition-all"
                            >
                                <User className="w-4 h-4" />
                                My Account
                            </Link>
                        </nav>

                        {/* CTA */}
                        <div className="px-6 py-6 border-t border-gray-100">
                            <Link
                                href="/products"
                                onClick={() => setMobileOpen(false)}
                                className="btn-primary w-full py-3 px-6 text-center block text-sm"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
