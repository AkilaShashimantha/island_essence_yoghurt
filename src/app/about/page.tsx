import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, Heart, Users, Target, Award } from 'lucide-react';

export const metadata: Metadata = { title: 'About Us' };

const team = [
    { name: 'Kavindi Rathnayaka', role: 'Founder & Product Lead', emoji: '👩‍🍳', desc: 'Passionate about plant-based nutrition and Sri Lankan culinary heritage.' },
    { name: 'Dineth Perera', role: 'Business & Sales Lead', emoji: '👨‍💼', desc: 'Driving growth strategy and partnerships across Colombo.' },
    { name: 'Sachini Mendis', role: 'Marketing & Brand', emoji: '👩‍🎨', desc: 'Crafting the Island Essence story and visual identity.' },
    { name: 'Ravindu Silva', role: 'Tech & Operations', emoji: '👨‍💻', desc: 'Building the platform that connects our yogurt to your door.' },
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section
                className="py-24 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f3d22, #1B6B3A)' }}
            >
                <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5">
                    <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #D4A843 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>
                <div className="container-custom relative z-10">
                    <Leaf className="w-10 h-10 text-[#D4A843] mx-auto mb-4" />
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
                        Our Story
                    </h1>
                    <div className="divider-gold mx-auto mb-6" />
                    <p className="text-green-100 max-w-2xl mx-auto text-lg leading-relaxed">
                        Island Essence was born from a belief that Sri Lanka's coconuts deserve to be celebrated in a modern, health-conscious way.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-white">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="animate-fade-in-left">
                        <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">Our Mission</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                            Making Healthy Food Accessible
                        </h2>
                        <div className="divider-gold mb-6" />
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We started Island Essence with a simple question: why was there no quality coconut milk yogurt in Sri Lanka, when we have some of the world's finest coconuts right here?
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our answer was to create it ourselves. Working with local coconut farmers, experimenting with live probiotic cultures, and obsessing over every detail of taste and texture.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Today, Island Essence is proudly Sri Lankan — from the coconuts in the cup to the team behind it. We're committed to keeping it natural, sustainable, and delicious.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: Leaf, label: 'Natural', value: '100%' },
                                { icon: Heart, label: 'Vegan', value: '✓' },
                                { icon: Award, label: 'Quality', value: 'Premium' },
                            ].map(({ icon: Icon, label, value }) => (
                                <div key={label} className="text-center p-4 rounded-[12px] bg-[#F5F0E8]">
                                    <Icon className="w-5 h-5 text-[#1B6B3A] mx-auto mb-2" />
                                    <div className="text-lg font-bold text-[#1B6B3A]" style={{ fontFamily: 'Playfair Display' }}>{value}</div>
                                    <div className="text-xs text-gray-500">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="animate-fade-in-right">
                        <div className="rounded-[12px] bg-gradient-to-br from-[#F5F0E8] to-[#e8f5ee] p-8 text-center">
                            <span className="text-8xl block mb-4 animate-float">🥛</span>
                            <blockquote className="text-gray-700 italic text-lg leading-relaxed" style={{ fontFamily: 'Playfair Display' }}>
                                "We believe that good food should be honest — made with real ingredients, real care, and a real commitment to your health."
                            </blockquote>
                            <p className="text-[#1B6B3A] font-semibold mt-4 text-sm">— Team Spark, Island Essence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-[#F5F0E8]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>Our Values</h2>
                        <div className="divider-gold mx-auto mt-4" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Leaf, title: 'Transparency', desc: 'We list every ingredient. No hidden additives. What you see is what you eat.' },
                            { icon: Heart, title: 'Community', desc: 'Sourcing locally, creating jobs, and giving back to Sri Lankan farming communities.' },
                            { icon: Target, title: 'Excellence', desc: 'Every batch is produced in small quantities to ensure consistent quality and freshness.' },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-white rounded-[12px] p-6 card-hover text-center">
                                <div className="w-14 h-14 bg-[#1B6B3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-6 h-6 text-[#1B6B3A]" />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display' }}>{title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">The People Behind It</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display' }}>Meet Team Spark</h2>
                        <div className="divider-gold mx-auto mt-4" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member) => (
                            <div key={member.name} className="card-hover rounded-[12px] border border-gray-100 overflow-hidden text-center bg-white">
                                <div className="py-8 bg-gradient-to-br from-[#F5F0E8] to-[#e8f5ee]">
                                    <span className="text-6xl">{member.emoji}</span>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-800 mb-1" style={{ fontFamily: 'Playfair Display' }}>{member.name}</h3>
                                    <p className="text-xs text-[#1B6B3A] font-semibold uppercase tracking-wide mb-2">{member.role}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#F5F0E8] text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                        Ready to Taste the Difference?
                    </h2>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/products" className="btn-primary px-8 py-3">Shop Now</Link>
                        <Link href="/contact" className="btn-outline px-8 py-3">Get in Touch</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
