import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Package, Truck, Home, Clock } from 'lucide-react';

export const metadata: Metadata = { title: 'Order Detail' };

const ORDER_STATUSES = ['Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];

const statusIcons = [Clock, Check, Package, Truck, Home];

const mockOrder = {
    id: 'IE-20260221-001',
    date: '21 Feb 2026, 10:32 AM',
    status: 'Out for Delivery',
    statusIndex: 3,
    items: [
        { name: 'Plain Coconut Milk Yogurt', qty: 2, price: 180, emoji: '🥛' },
        { name: 'Coconut Milk Yogurt with Honey', qty: 1, price: 210, emoji: '🍯' },
    ],
    address: '42 Galle Road, Colombo 3',
    payment: 'Cash on Delivery',
    subtotal: 570,
    delivery: 150,
    total: 720,
};

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const currentStatusIndex = mockOrder.statusIndex;

    return (
        <div className="bg-[#F5F0E8]/30 min-h-screen">
            <section className="pt-32 pb-12 bg-[#F5F0E8]">
                <div className="container-custom">
                    <Link href="/account/orders" className="text-xs text-[#1B6B3A] font-medium hover:underline flex items-center gap-1 mb-1">
                        ← My Orders
                    </Link>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                            Order {id}
                        </h1>
                        <span className="badge bg-purple-100 text-purple-700 text-xs">{mockOrder.status}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{mockOrder.date}</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom max-w-3xl space-y-6">
                    {/* Status Timeline */}
                    <div className="bg-white rounded-[12px] p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display' }}>
                            Order Status
                        </h2>
                        <div className="flex items-start justify-between relative">
                            {/* Progress line */}
                            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200">
                                <div
                                    className="h-full bg-[#1B6B3A] transition-all duration-500"
                                    style={{ width: `${(currentStatusIndex / (ORDER_STATUSES.length - 1)) * 100}%` }}
                                />
                            </div>

                            {ORDER_STATUSES.map((s, i) => {
                                const Icon = statusIcons[i];
                                const done = i <= currentStatusIndex;
                                const active = i === currentStatusIndex;
                                return (
                                    <div key={s} className="flex flex-col items-center relative z-10 flex-1">
                                        <div
                                            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center mb-2 transition-all ${done
                                                ? 'bg-[#1B6B3A] border-[#1B6B3A] text-white'
                                                : 'bg-white border-gray-200 text-gray-300'
                                                } ${active ? 'ring-4 ring-[#1B6B3A]/20 scale-110' : ''}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <p className={`text-[10px] text-center font-semibold leading-tight ${done ? 'text-[#1B6B3A]' : 'text-gray-400'}`}>
                                            {s}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Items */}
                    <div className="bg-white rounded-[12px] p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display' }}>Items Ordered</h2>
                        <div className="space-y-3">
                            {mockOrder.items.map((item) => (
                                <div key={item.name} className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] flex items-center justify-center text-2xl shrink-0">
                                        {item.emoji}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                                        <p className="text-xs text-gray-400">Qty: {item.qty} × LKR {item.price}</p>
                                    </div>
                                    <p className="font-semibold text-[#1B6B3A] text-sm">LKR {(item.qty * item.price).toLocaleString()}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-100 mt-4 pt-4 space-y-1.5">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Subtotal</span><span>LKR {mockOrder.subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Delivery</span><span>LKR {mockOrder.delivery}</span>
                            </div>
                            <div className="flex justify-between font-bold text-[#1B6B3A] pt-1 border-t border-gray-100">
                                <span>Total</span><span>LKR {mockOrder.total.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Delivery & Payment */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white rounded-[12px] p-5 shadow-sm">
                            <h3 className="font-bold text-gray-800 mb-3 text-sm">Delivery Address</h3>
                            <p className="text-sm text-gray-600">{mockOrder.address}</p>
                        </div>
                        <div className="bg-white rounded-[12px] p-5 shadow-sm">
                            <h3 className="font-bold text-gray-800 mb-3 text-sm">Payment Method</h3>
                            <p className="text-sm text-gray-600">{mockOrder.payment}</p>
                        </div>
                    </div>

                    {/* Cancel (if pending) */}
                    <div className="bg-white rounded-[12px] p-5 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-800 text-sm">Need Help?</p>
                            <p className="text-xs text-gray-400">Contact us if you have any issue with this order.</p>
                        </div>
                        <Link href="/contact" className="btn-outline px-4 py-2 text-xs">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
