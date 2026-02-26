import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = { title: 'My Orders' };

const statusColors: Record<string, string> = {
    Pending: 'bg-yellow-100 text-yellow-700',
    Confirmed: 'bg-blue-100 text-blue-700',
    Preparing: 'bg-orange-100 text-orange-700',
    'Out for Delivery': 'bg-purple-100 text-purple-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-500',
};

const mockOrders = [
    { id: 'IE-20260221-001', date: '21 Feb 2026', items: 'Plain × 2, Honey × 1', total: 570, status: 'Out for Delivery' },
    { id: 'IE-20260218-002', date: '18 Feb 2026', items: 'Blueberry × 3', total: 750, status: 'Delivered' },
    { id: 'IE-20260214-003', date: '14 Feb 2026', items: 'Strawberry × 2, Vanilla × 2', total: 950, status: 'Delivered' },
    { id: 'IE-20260210-004', date: '10 Feb 2026', items: 'Bulk Plain × 1', total: 950, status: 'Delivered' },
    { id: 'IE-20260205-005', date: '5 Feb 2026', items: 'Plain × 4', total: 870, status: 'Cancelled' },
];

export default function MyOrdersPage() {
    return (
        <div className="bg-[#F5F0E8]/30 min-h-screen">
            <section className="pt-32 pb-12 bg-[#F5F0E8]">
                <div className="container-custom flex items-center justify-between">
                    <div>
                        <Link href="/account" className="text-xs text-[#1B6B3A] font-medium hover:underline flex items-center gap-1 mb-1">
                            ← My Account
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>My Orders</h1>
                    </div>
                    <Link href="/products" className="btn-primary px-5 py-2.5 text-sm">Shop Again</Link>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom max-w-3xl space-y-4">
                    {mockOrders.map((order) => (
                        <Link
                            key={order.id}
                            href={`/account/orders/${order.id}`}
                            className="bg-white rounded-[12px] p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group"
                        >
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="font-bold text-gray-800 text-sm">{order.id}</p>
                                    <span className={`badge text-[10px] ${statusColors[order.status] ?? 'bg-gray-100 text-gray-600'}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 truncate">{order.items}</p>
                                <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
                            </div>
                            <div className="text-right shrink-0">
                                <p className="font-bold text-[#1B6B3A]">LKR {order.total.toLocaleString()}</p>
                                <p className="text-xs text-gray-400">incl. delivery</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1B6B3A] transition-colors shrink-0" />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
