import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, Globe, Recycle, Sun } from 'lucide-react';

export const metadata: Metadata = { title: 'Sustainability' };

const sdgs = [
    {
        number: '03',
        name: 'Good Health & Well-Being',
        desc: 'Our probiotic-rich yogurt promotes gut health and a balanced diet, supporting physical wellness for every customer.',
        icon: '💚',
        color: '#4CAF50',
    },
    {
        number: '08',
        name: 'Decent Work & Economic Growth',
        desc: 'We source from local coconut farmers, create fair employment, and invest in our community to drive inclusive growth.',
        icon: '📈',
        color: '#A21942',
    },
    {
        number: '12',
        name: 'Responsible Consumption',
        desc: 'No unnecessary processing, minimal packaging, and a focus on natural ingredients reduces our environmental impact at every step.',
        icon: '♻️',
        color: '#3F7E44',
    },
];

const initiatives = [
    {
        icon: Recycle,
        title: 'Eco-Friendly Packaging',
        desc: 'All our 100g cups and 500g tubs are made from recyclable materials. We\'re working toward compostable packaging in Phase 02.',
    },
    {
        icon: Leaf,
        title: 'Local Sourcing',
        desc: 'Every drop of coconut milk comes from Sri Lankan farms within 50km of production, reducing food miles and supporting local livelihoods.',
    },
    {
        icon: Globe,
        title: 'No Artificial Additives',
        desc: 'By rejecting preservatives, artificial colours, and synthetic thickeners, we reduce chemical load on both bodies and environment.',
    },
    {
        icon: Sun,
        title: 'Small-Batch Production',
        desc: 'Handcrafted in small batches ensures minimal waste, fresher products, and a lower carbon footprint compared to industrial alternatives.',
    },
];

export default function SustainabilityPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section
                className="py-24 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f3d22, #1B6B3A)' }}
            >
                <div className="container-custom relative z-10">
                    <Leaf className="w-10 h-10 text-[#D4A843] mx-auto mb-4 animate-float" />
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
                        Our Commitment to the Planet
                    </h1>
                    <div className="divider-gold mx-auto mb-6" />
                    <p className="text-green-100 max-w-xl mx-auto text-lg leading-relaxed">
                        Sustainability is not just a promise — it's baked into every decision we make.
                    </p>
                </div>
            </section>

            {/* SDGs */}
            <section className="section-padding bg-[#F5F0E8]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">Global Impact</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display' }}>
                            Aligned with the UN SDGs
                        </h2>
                        <div className="divider-gold mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sdgs.map((sdg) => (
                            <div key={sdg.number} className="bg-white rounded-[12px] overflow-hidden shadow-sm card-hover">
                                <div className="p-6 text-center" style={{ background: `${sdg.color}15` }}>
                                    <span className="text-5xl block mb-2">{sdg.icon}</span>
                                    <div
                                        className="text-4xl font-bold mb-1"
                                        style={{ color: sdg.color, fontFamily: 'Playfair Display' }}
                                    >
                                        SDG {sdg.number}
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-sm">{sdg.name}</h3>
                                </div>
                                <div className="p-5">
                                    <p className="text-sm text-gray-600 leading-relaxed">{sdg.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                            What We're Doing
                        </h2>
                        <div className="divider-gold mx-auto mt-4" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {initiatives.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex gap-4 p-6 rounded-[12px] border border-gray-100 card-hover bg-white">
                                <div className="w-12 h-12 rounded-xl bg-[#1B6B3A]/10 flex items-center justify-center shrink-0">
                                    <Icon className="w-6 h-6 text-[#1B6B3A]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display' }}>{title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pledge Banner */}
            <section
                className="py-16 text-center"
                style={{ background: 'linear-gradient(135deg, #0f3d22, #1B6B3A)' }}
            >
                <div className="container-custom">
                    <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
                        Our Eco-Packaging Pledge
                    </h2>
                    <p className="text-green-100 max-w-xl mx-auto mb-8 leading-relaxed">
                        By 2027, we pledge to transition 100% of our packaging to certified compostable or fully recyclable materials — because a healthier planet means healthier food.
                    </p>
                    <Link href="/products" className="btn-gold px-8 py-3 inline-block">
                        Shop Sustainably
                    </Link>
                </div>
            </section>
        </div>
    );
}
