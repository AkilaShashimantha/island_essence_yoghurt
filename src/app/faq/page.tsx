'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';


const faqCategories = [
    {
        category: 'Products & Ingredients',
        icon: '🥛',
        faqs: [
            {
                q: 'What is the shelf life of Island Essence yogurt?',
                a: 'Our yogurt has a shelf life of 7 days from the production date when stored in a refrigerator at 4°C or below. Always consume by the best-before date printed on the cup.',
            },
            {
                q: 'Are your products suitable for people with lactose intolerance?',
                a: 'Yes! Island Essence yogurt is 100% coconut milk-based — completely dairy-free and lactose-free. It is also vegan, making it suitable for a wide range of dietary needs.',
            },
            {
                q: 'Do your products contain any allergens?',
                a: 'Our yogurt contains tree nuts (coconut). Our Honey variant additionally contains honey, which is not suitable for children under 1 year. All products are free from dairy, gluten, soy, and eggs. Produced in a facility that processes tree nuts.',
            },
            {
                q: 'Do you use any preservatives or artificial additives?',
                a: 'Absolutely not. Island Essence contains only natural ingredients: coconut milk, live probiotic cultures, tapioca starch, and natural flavours where applicable. No preservatives, artificial colours, or synthetic thickeners — ever.',
            },
            {
                q: 'What probiotic strains are in your yogurt?',
                a: 'We use two clinically studied strains: Lactobacillus acidophilus (L. acidophilus) and Bifidobacterium lactis (B. lactis), both known for supporting digestive health and immune function.',
            },
        ],
    },
    {
        category: 'Ordering & Delivery',
        icon: '🚚',
        faqs: [
            {
                q: 'Which areas do you deliver to?',
                a: 'In Phase 01, we deliver to Colombo 1 through 7 only. We are working on expanding island-wide in Phase 02. Enter your postal code at checkout to confirm availability.',
            },
            {
                q: 'How much does delivery cost?',
                a: 'We charge a flat delivery fee of LKR 150 for all orders within Colombo 1–7. Orders above LKR 1,500 qualify for free delivery.',
            },
            {
                q: 'What is the minimum order value?',
                a: 'The minimum order is LKR 360, which equates to 2 cups of our standard 100g yogurt. This helps ensure freshness during delivery.',
            },
            {
                q: 'How long does delivery take?',
                a: 'Orders are typically delivered within 2–4 hours on the same day if placed before 2pm. Orders placed after 2pm will be delivered the next morning.',
            },
            {
                q: 'Can I modify or cancel my order?',
                a: 'You can cancel or modify your order while it is in "Pending" or "Confirmed" status. Once it moves to "Preparing," cancellations are no longer possible.',
            },
        ],
    },
    {
        category: 'Payment',
        icon: '💳',
        faqs: [
            {
                q: 'What payment methods do you accept?',
                a: 'We accept Cash on Delivery (COD) and card payments via the PayHere payment gateway (Visa and Mastercard).',
            },
            {
                q: 'Is online payment secure?',
                a: 'Yes. All card transactions are processed by PayHere — a certified Sri Lankan payment gateway. We never store your card details on our servers.',
            },
            {
                q: 'Do you issue receipts?',
                a: 'Yes. An automated order confirmation email with a full summary and receipt is sent to your registered email address immediately after placing your order.',
            },
        ],
    },
    {
        category: 'Accounts & Technical',
        icon: '👤',
        faqs: [
            {
                q: 'Do I need an account to order?',
                a: 'You can browse our products and add items to your cart as a guest. However, you must register and log in to proceed to checkout.',
            },
            {
                q: 'How do I reset my password?',
                a: 'Click "Forgot Password" on the login page and enter your registered email address. You\'ll receive a password reset link valid for 30 minutes.',
            },
            {
                q: 'How do I track my order?',
                a: 'Log in to your account and go to "My Orders." Each order shows its current status: Pending → Confirmed → Preparing → Out for Delivery → Delivered. You\'ll also receive SMS notifications at each stage.',
            },
        ],
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border border-gray-200 rounded-[12px] overflow-hidden transition-all ${open ? 'border-[#1B6B3A]/40' : ''}`}>
            <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#F5F0E8] transition-colors"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="font-semibold text-gray-800 text-sm pr-4">{question}</span>
                {open ? (
                    <ChevronUp className="w-4 h-4 text-[#1B6B3A] shrink-0" />
                ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
            </button>
            {open && (
                <div className="px-5 pb-4 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F5F0E8]/30 animate-fade-in">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function FAQPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section
                className="pt-32 pb-16 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f3d22 0%, #1B6B3A 50%, #2a8a4e 100%)' }}
            >
                <div className="container-custom">
                    <HelpCircle className="w-10 h-10 text-[#D4A843] mx-auto mb-4" />
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
                        Frequently Asked Questions
                    </h1>
                    <div className="divider-gold mx-auto mb-4" />
                    <p className="text-green-100 max-w-xl mx-auto">
                        Can't find your answer? <a href="/contact" className="text-[#D4A843] font-semibold hover:underline">Contact us</a> and we'll be happy to help.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom max-w-3xl">
                    {faqCategories.map((cat) => (
                        <div key={cat.category} className="mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl">{cat.icon}</span>
                                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>
                                    {cat.category}
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {cat.faqs.map((faq) => (
                                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
