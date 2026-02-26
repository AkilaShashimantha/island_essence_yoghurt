'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, MapPin, CreditCard, ClipboardList, ChevronRight } from 'lucide-react';
import { useCartStore } from '@/lib/store/cartStore';

const STEPS = ['Address', 'Payment', 'Review', 'Confirm'];

const flavourEmojis: Record<string, string> = {
    Plain: '🥛', Blueberry: '🫐', Vanilla: '🍦', Strawberry: '🍓', Honey: '🍯', Bulk: '🏺',
};

export default function CheckoutPage() {
    const [step, setStep] = useState(0);
    const [address, setAddress] = useState({ name: '', phone: '', street: '', city: 'Colombo', postal: '', notes: '' });
    const [payment, setPayment] = useState<'cod' | 'card'>('cod');
    const { items, getSubtotal, getDeliveryFee, getTotal, clearCart } = useCartStore();

    const subtotal = getSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = getTotal();

    const handleConfirm = () => {
        setStep(3);
        clearCart();
    };

    const stepIcons = [MapPin, CreditCard, ClipboardList, Check];

    return (
        <div className="bg-[#F5F0E8]/30 min-h-screen">
            {/* Header */}
            <section className="py-12 bg-[#F5F0E8]">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display' }}>
                        Checkout
                    </h1>
                    {/* Step indicator */}
                    <div className="flex items-center max-w-md">
                        {STEPS.map((s, i) => {
                            const Icon = stepIcons[i];
                            return (
                                <div key={s} className="flex items-center">
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i < step ? 'bg-green-500 text-white' :
                                            i === step ? 'bg-[#1B6B3A] text-white ring-4 ring-[#1B6B3A]/20' :
                                                'bg-gray-200 text-gray-400'
                                        }`}>
                                        {i < step ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                                    </div>
                                    <span className={`hidden sm:block text-xs font-medium ml-2 ${i === step ? 'text-[#1B6B3A]' : 'text-gray-400'
                                        }`}>{s}</span>
                                    {i < STEPS.length - 1 && (
                                        <div className={`flex-1 h-0.5 mx-3 rounded-full ${i < step ? 'bg-green-400' : 'bg-gray-200'}`} style={{ minWidth: '24px' }} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Main */}
                    <div className="lg:col-span-2">

                        {/* Step 0: Address */}
                        {step === 0 && (
                            <div className="bg-white rounded-[12px] p-6 shadow-sm animate-fade-in">
                                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                                    <MapPin className="w-5 h-5 text-[#1B6B3A]" /> Delivery Address
                                </h2>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Full Name *</label>
                                            <input className="input-field" value={address.name} onChange={e => setAddress({ ...address, name: e.target.value })} placeholder="Dilini Perera" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Phone Number *</label>
                                            <input className="input-field" value={address.phone} onChange={e => setAddress({ ...address, phone: e.target.value })} placeholder="+94 77 123 4567" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Street Address *</label>
                                        <input className="input-field" value={address.street} onChange={e => setAddress({ ...address, street: e.target.value })} placeholder="42, Galle Road, Colombo 3" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">City</label>
                                            <select className="input-field" value={address.city} onChange={e => setAddress({ ...address, city: e.target.value })}>
                                                {['Colombo 1', 'Colombo 2', 'Colombo 3', 'Colombo 4', 'Colombo 5', 'Colombo 6', 'Colombo 7'].map(c => (
                                                    <option key={c}>{c}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Postal Code</label>
                                            <input className="input-field" value={address.postal} onChange={e => setAddress({ ...address, postal: e.target.value })} placeholder="00300" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5 block">Delivery Notes (optional)</label>
                                        <textarea className="input-field resize-none" rows={2} value={address.notes} onChange={e => setAddress({ ...address, notes: e.target.value })} placeholder="Leave at door, ring bell, etc." />
                                    </div>
                                </div>
                                <button
                                    onClick={() => setStep(1)}
                                    disabled={!address.name || !address.phone || !address.street}
                                    className="btn-primary mt-6 px-8 py-3 flex items-center gap-2 text-sm disabled:opacity-50"
                                >
                                    Continue to Payment <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}

                        {/* Step 1: Payment */}
                        {step === 1 && (
                            <div className="bg-white rounded-[12px] p-6 shadow-sm animate-fade-in">
                                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                                    <CreditCard className="w-5 h-5 text-[#1B6B3A]" /> Payment Method
                                </h2>
                                <div className="space-y-3">
                                    {[
                                        { id: 'cod', label: 'Cash on Delivery (COD)', emoji: '💵', desc: 'Pay in cash when your order arrives.' },
                                        { id: 'card', label: 'Card Payment via PayHere', emoji: '💳', desc: 'Visa & Mastercard accepted. Secure Sri Lankan gateway.' },
                                    ].map((opt) => (
                                        <label
                                            key={opt.id}
                                            className={`flex items-start gap-3 p-4 rounded-[12px] border-2 cursor-pointer transition-all ${payment === opt.id ? 'border-[#1B6B3A] bg-[#1B6B3A]/5' : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={opt.id}
                                                checked={payment === opt.id}
                                                onChange={() => setPayment(opt.id as 'cod' | 'card')}
                                                className="mt-1"
                                            />
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span>{opt.emoji}</span>
                                                    <span className="font-semibold text-gray-800 text-sm">{opt.label}</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-0.5">{opt.desc}</p>
                                            </div>
                                        </label>
                                    ))}
                                </div>

                                {payment === 'card' && (
                                    <div className="mt-4 p-4 bg-[#F5F0E8] rounded-[12px] text-sm text-gray-600">
                                        🔒 You will be redirected to the PayHere secure payment page after reviewing your order.
                                    </div>
                                )}

                                <div className="flex gap-3 mt-6">
                                    <button onClick={() => setStep(0)} className="btn-outline px-6 py-2.5 text-sm">← Back</button>
                                    <button onClick={() => setStep(2)} className="btn-primary px-8 py-2.5 flex items-center gap-2 text-sm">
                                        Review Order <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Review */}
                        {step === 2 && (
                            <div className="bg-white rounded-[12px] p-6 shadow-sm animate-fade-in">
                                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                                    <ClipboardList className="w-5 h-5 text-[#1B6B3A]" /> Review Order
                                </h2>

                                {/* Address Summary */}
                                <div className="mb-4 p-4 bg-[#F5F0E8] rounded-[12px]">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Delivery To</p>
                                    <p className="text-sm font-medium text-gray-800">{address.name}</p>
                                    <p className="text-sm text-gray-600">{address.street}, {address.city}</p>
                                    <p className="text-sm text-gray-500">{address.phone}</p>
                                </div>

                                {/* Payment Summary */}
                                <div className="mb-4 p-4 bg-[#F5F0E8] rounded-[12px]">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Payment</p>
                                    <p className="text-sm text-gray-800">{payment === 'cod' ? '💵 Cash on Delivery' : '💳 Card via PayHere'}</p>
                                </div>

                                {/* Items */}
                                <div className="space-y-2 mb-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Items</p>
                                    {items.map(({ product, quantity }) => (
                                        <div key={product.id} className="flex items-center justify-between text-sm">
                                            <span className="flex items-center gap-2">
                                                <span>{flavourEmojis[product.flavour]}</span>
                                                <span className="text-gray-700">{product.name} × {quantity}</span>
                                            </span>
                                            <span className="font-medium">LKR {(product.price * quantity).toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-6">
                                    <button onClick={() => setStep(1)} className="btn-outline px-6 py-2.5 text-sm">← Back</button>
                                    <button onClick={handleConfirm} className="btn-gold px-8 py-2.5 flex items-center gap-2 text-sm">
                                        Place Order ✓
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Confirmed */}
                        {step === 3 && (
                            <div className="bg-white rounded-[12px] p-10 shadow-sm text-center animate-scale-in">
                                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display' }}>
                                    Order Confirmed!
                                </h2>
                                <p className="text-gray-500 mb-2">🎉 Thank you for your order, {address.name}!</p>
                                <p className="text-sm text-gray-400 mb-6">
                                    A confirmation email has been sent. Your fresh yogurt is being prepared and will arrive soon.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <Link href="/" className="btn-primary px-8 py-3 text-sm">Back to Home</Link>
                                    <Link href="/account/orders" className="btn-outline px-8 py-3 text-sm">Track Order</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Order Summary Sidebar */}
                    {step < 3 && (
                        <div className="bg-white rounded-[12px] p-6 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                                Order Summary
                            </h3>
                            <ul className="space-y-2 mb-4">
                                {items.map(({ product, quantity }) => (
                                    <li key={product.id} className="flex justify-between text-sm">
                                        <span className="text-gray-600 truncate max-w-[180px]">{product.name} × {quantity}</span>
                                        <span className="font-medium ml-2">LKR {(product.price * quantity).toLocaleString()}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-gray-100 pt-3 space-y-1.5">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span><span>LKR {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Delivery</span><span>LKR {deliveryFee.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between font-bold text-base pt-1 border-t border-gray-100">
                                    <span>Total</span>
                                    <span className="text-[#1B6B3A]">LKR {total.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
