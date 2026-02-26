'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="bg-white">
            {/* Hero */}
            <section
                className="pt-32 pb-16 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f3d22 0%, #1B6B3A 50%, #2a8a4e 100%)' }}
            >
                <div className="container-custom">
                    <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                        We'd Love to Hear From You
                    </h1>
                    <div className="divider-gold mx-auto" />
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Info */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                                Contact Information
                            </h2>
                            <div className="divider-gold" />
                        </div>

                        {[
                            { icon: Mail, label: 'Email', value: 'hello@islandessence.lk', href: 'mailto:hello@islandessence.lk' },
                            { icon: Phone, label: 'Phone', value: '+94 77 123 4567', href: 'tel:+94771234567' },
                            { icon: MapPin, label: 'Delivery Area', value: 'Colombo 1–7, Sri Lanka', href: null },
                            { icon: Clock, label: 'Hours', value: 'Mon–Sat: 8am–6pm', href: null },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <div key={label} className="flex gap-3 items-start">
                                <div className="w-10 h-10 rounded-xl bg-[#1B6B3A]/10 flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-[#1B6B3A]" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                                    {href ? (
                                        <a href={href} className="text-gray-700 font-medium hover:text-[#1B6B3A] transition-colors text-sm">{value}</a>
                                    ) : (
                                        <p className="text-gray-700 font-medium text-sm">{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Map Placeholder */}
                        <div className="rounded-[12px] overflow-hidden bg-[#F5F0E8] h-48 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-8 h-8 text-[#1B6B3A] mx-auto mb-2" />
                                <p className="text-sm text-gray-500">Colombo, Sri Lanka</p>
                                <p className="text-xs text-gray-400">Delivery: Colombo 1–7</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#F5F0E8] rounded-[12px] p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display' }}>
                                Send us a Message
                            </h2>

                            {submitted ? (
                                <div className="text-center py-16 animate-scale-in">
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display' }}>Message Sent!</h3>
                                    <p className="text-gray-600 text-sm">We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="input-field"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Kavindi Perera"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                className="input-field"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            placeholder="Order enquiry / Bulk order / Feedback"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">
                                            Message *
                                        </label>
                                        <textarea
                                            className="input-field resize-none"
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="How can we help you today?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary px-8 py-3 flex items-center gap-2 text-sm"
                                    >
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
