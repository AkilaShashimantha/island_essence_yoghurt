import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingBag, Users, Package, DollarSign, TrendingUp, Clock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Admin Dashboard' };

const stats = [
    { label: 'Total Orders', value: '142', trend: '+12% this week', icon: ShoppingBag, color: '#1B6B3A', bg: '#e8f5ee' },
    { label: 'Revenue', value: 'LKR 87,420', trend: '+8% this week', icon: DollarSign, color: '#D4A843', bg: '#fdf6e8' },
    { label: 'Total Customers', value: '94', trend: '+5 new today', icon: Users, color: '#1B6B3A', bg: '#e8f5ee' },
    { label: 'Products Active', value: '6', trend: 'All in stock', icon: Package, color: '#D4A843', bg: '#fdf6e8' },
];

const recentOrders = [
    { id: 'IE-20260221-006', customer: 'Nuwan Silva', status: 'Pending', total: 720, items: 3 },
    { id: 'IE-20260221-005', customer: 'Amara K.', status: 'Confirmed', total: 360, items: 2 },
    { id: 'IE-20260221-004', customer: 'Roshini F.', status: 'Out for Delivery', total: 1120, items: 5 },
    { id: 'IE-20260221-003', customer: 'Dilini P.', status: 'Delivered', total: 570, items: 3 },
    { id: 'IE-20260221-002', customer: 'Kasun M.', status: 'Delivered', total: 950, items: 4 },
];

const statusColors: Record<string, string> = {
    Pending: 'bg-yellow-100 text-yellow-700',
    Confirmed: 'bg-blue-100 text-blue-700',
    Preparing: 'bg-orange-100 text-orange-700',
    'Out for Delivery': 'bg-purple-100 text-purple-700',
    Delivered: 'bg-green-100 text-green-700',
    Cancelled: 'bg-red-100 text-red-500',
};

const adminNav = [
    { href: '/admin', label: 'Dashboard', active: true },
    { href: '/admin/orders', label: 'Orders' },
    { href: '/admin/products', label: 'Products' },
    { href: '/admin/customers', label: 'Customers' },
];

export default function AdminDashboard() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            {/* Admin Topbar */}
            <div className="bg-[#1B6B3A] text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>🌿 Island Essence Admin</h1>
                    <nav className="hidden md:flex items-center gap-1 ml-6">
                        {adminNav.map((n) => (
                            <Link
                                key={n.label}
                                href={n.href}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${n.active ? 'bg-white text-[#1B6B3A]' : 'text-green-200 hover:bg-white/10'
                                    }`}
                            >
                                {n.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <Link href="/" className="text-xs text-green-200 hover:text-white">← View Site</Link>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">A</div>
                </div>
            </div>

            <div className="p-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                        Dashboard Overview
                    </h2>
                    <p className="text-gray-500 text-sm mt-0.5">
                        Friday, 21 February 2026 — Good morning, Admin!
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map(({ label, value, trend, icon: Icon, color, bg }) => (
                        <div key={label} className="bg-white rounded-[12px] p-5 shadow-sm border border-gray-100 card-hover">
                            <div className="flex items-start justify-between mb-3">
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                                    <Icon className="w-5 h-5" style={{ color }} />
                                </div>
                                <TrendingUp className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-0.5" style={{ fontFamily: 'Playfair Display' }}>{value}</div>
                            <div className="text-xs text-gray-500">{label}</div>
                            <div className="text-xs text-green-600 mt-1">{trend}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2 bg-white rounded-[12px] shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between p-5 border-b border-gray-100">
                            <h3 className="font-bold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>Recent Orders</h3>
                            <Link href="/admin/orders" className="text-xs text-[#1B6B3A] font-semibold hover:underline flex items-center gap-0.5">
                                View All <ChevronRight className="w-3 h-3" />
                            </Link>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {recentOrders.map((order) => (
                                <div key={order.id} className="px-5 py-3.5 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-gray-800">{order.id}</p>
                                        <p className="text-xs text-gray-400">{order.customer} · {order.items} items</p>
                                    </div>
                                    <span className={`badge text-[10px] ${statusColors[order.status] ?? ''}`}>{order.status}</span>
                                    <span className="text-sm font-bold text-[#1B6B3A] whitespace-nowrap">LKR {order.total.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links panel */}
                    <div className="space-y-4">
                        {/* Alerts */}
                        <div className="bg-white rounded-[12px] shadow-sm border border-gray-100 p-5">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                                <Clock className="w-4 h-4 text-[#D4A843]" /> Pending Actions
                            </h3>
                            <ul className="space-y-2.5">
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Pending orders</span>
                                    <span className="badge bg-yellow-100 text-yellow-700">3</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Low stock items</span>
                                    <span className="badge bg-red-100 text-red-500">1</span>
                                </li>
                                <li className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">New messages</span>
                                    <span className="badge bg-blue-100 text-blue-700">2</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-[12px] shadow-sm border border-gray-100 p-5">
                            <h3 className="font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display' }}>Quick Actions</h3>
                            <div className="space-y-2">
                                {[
                                    { href: '/admin/orders', label: 'Manage Orders', icon: ShoppingBag },
                                    { href: '/admin/products', label: 'Edit Products', icon: Package },
                                    { href: '/admin/customers', label: 'View Customers', icon: Users },
                                ].map(({ href, label, icon: Icon }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-[#F5F0E8] transition-colors group"
                                    >
                                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#1B6B3A]" />
                                        <span className="text-sm text-gray-600 group-hover:text-[#1B6B3A] font-medium">{label}</span>
                                        <ChevronRight className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-[#1B6B3A]" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
