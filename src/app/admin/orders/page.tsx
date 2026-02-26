import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, Filter, Eye } from 'lucide-react';

export const metadata: Metadata = { title: 'Admin – Orders' };

const statusColors: Record<string, string> = {
    Pending: 'bg-yellow-100 text-yellow-700',
    Confirmed: 'bg-blue-100 text-blue-700',
    Preparing: 'bg-orange-100 text-orange-700',
    'Out for Delivery': 'bg-purple-100 text-purple-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-500',
};

const mockOrders = [
    { id: 'IE-20260221-006', customer: 'Nuwan Silva', phone: '+94 77 222 3333', address: 'Colombo 4', status: 'Pending', total: 720, items: 3, date: '21 Feb 2026' },
    { id: 'IE-20260221-005', customer: 'Amara K.', phone: '+94 71 444 5555', address: 'Colombo 2', status: 'Confirmed', total: 360, items: 2, date: '21 Feb 2026' },
    { id: 'IE-20260221-004', customer: 'Roshini F.', phone: '+94 76 789 0123', address: 'Colombo 7', status: 'Out for Delivery', total: 1120, items: 5, date: '21 Feb 2026' },
    { id: 'IE-20260221-003', customer: 'Dilini P.', phone: '+94 77 123 4567', address: 'Colombo 3', status: 'Delivered', total: 570, items: 3, date: '20 Feb 2026' },
    { id: 'IE-20260221-002', customer: 'Kasun M.', phone: '+94 78 567 8901', address: 'Colombo 5', status: 'Delivered', total: 950, items: 4, date: '20 Feb 2026' },
    { id: 'IE-20260221-001', customer: 'Chamari B.', phone: '+94 71 234 5678', address: 'Colombo 6', status: 'Cancelled', total: 400, items: 2, date: '20 Feb 2026' },
];

const statusOptions = ['All', 'Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'];

export default function AdminOrdersPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <div className="bg-[#1B6B3A] text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>🌿 Island Essence Admin</Link>
                    <nav className="hidden md:flex items-center gap-1 ml-6">
                        {[{ href: '/admin', label: 'Dashboard' }, { href: '/admin/orders', label: 'Orders', active: true }, { href: '/admin/products', label: 'Products' }, { href: '/admin/customers', label: 'Customers' }].map((n) => (
                            <Link key={n.label} href={n.href} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${n.active ? 'bg-white text-[#1B6B3A]' : 'text-green-200 hover:bg-white/10'}`}>{n.label}</Link>
                        ))}
                    </nav>
                </div>
                <Link href="/" className="text-xs text-green-200 hover:text-white">← View Site</Link>
            </div>

            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>Order Management</h2>
                        <p className="text-gray-500 text-sm">{mockOrders.length} total orders</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input placeholder="Search by order ID or customer..." className="input-field pl-10 bg-white" />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <Filter className="w-4 h-4 text-gray-400" />
                        {statusOptions.map((s) => (
                            <button key={s} className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${s === 'All' ? 'bg-[#1B6B3A] text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}>{s}</button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-[12px] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50 text-left">
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Order ID</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Customer</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Date</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Status</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Items</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Total</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {mockOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3.5 text-sm font-mono font-semibold text-gray-700">{order.id}</td>
                                        <td className="px-5 py-3.5">
                                            <p className="text-sm font-medium text-gray-800">{order.customer}</p>
                                            <p className="text-xs text-gray-400">{order.address}</p>
                                        </td>
                                        <td className="px-5 py-3.5 text-xs text-gray-500">{order.date}</td>
                                        <td className="px-5 py-3.5">
                                            <select className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${statusColors[order.status]}`}>
                                                {statusOptions.filter(s => s !== 'All').map(s => (
                                                    <option key={s} selected={s === order.status}>{s}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="px-5 py-3.5 text-sm text-gray-600 text-center">{order.items}</td>
                                        <td className="px-5 py-3.5 text-sm font-bold text-[#1B6B3A]">LKR {order.total.toLocaleString()}</td>
                                        <td className="px-5 py-3.5">
                                            <Link href={`/account/orders/${order.id}`} className="p-1.5 rounded-lg hover:bg-[#F5F0E8] text-gray-400 hover:text-[#1B6B3A] transition-colors inline-flex">
                                                <Eye className="w-4 h-4" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
