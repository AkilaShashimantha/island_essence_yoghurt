import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = { title: 'Admin – Customers' };

const mockCustomers = [
    { id: 'USR-001', name: 'Dilini Perera', email: 'dilini@example.com', phone: '+94 77 123 4567', address: 'Colombo 3', totalOrders: 8, totalSpent: 2840, joined: '10 Jan 2026', active: true },
    { id: 'USR-002', name: 'Nuwan Silva', email: 'nuwan@example.com', phone: '+94 77 222 3333', address: 'Colombo 4', totalOrders: 3, totalSpent: 1080, joined: '18 Jan 2026', active: true },
    { id: 'USR-003', name: 'Amara Jayasinghe', email: 'amara@example.com', phone: '+94 71 444 5555', address: 'Colombo 2', totalOrders: 5, totalSpent: 1750, joined: '25 Jan 2026', active: true },
    { id: 'USR-004', name: 'Roshini Fernando', email: 'roshini@example.com', phone: '+94 76 789 0123', address: 'Colombo 7', totalOrders: 12, totalSpent: 4320, joined: '3 Jan 2026', active: true },
    { id: 'USR-005', name: 'Kasun Mendis', email: 'kasun@example.com', phone: '+94 78 567 8901', address: 'Colombo 5', totalOrders: 2, totalSpent: 570, joined: '1 Feb 2026', active: false },
    { id: 'USR-006', name: 'Chamari Bandara', email: 'chamari@example.com', phone: '+94 71 234 5678', address: 'Colombo 6', totalOrders: 4, totalSpent: 1420, joined: '12 Jan 2026', active: true },
];

export default function AdminCustomersPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <div className="bg-[#1B6B3A] text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>🌿 Island Essence Admin</Link>
                    <nav className="hidden md:flex items-center gap-1 ml-6">
                        {[{ href: '/admin', label: 'Dashboard' }, { href: '/admin/orders', label: 'Orders' }, { href: '/admin/products', label: 'Products' }, { href: '/admin/customers', label: 'Customers', active: true }].map((n) => (
                            <Link key={n.label} href={n.href} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${n.active ? 'bg-white text-[#1B6B3A]' : 'text-green-200 hover:bg-white/10'}`}>{n.label}</Link>
                        ))}
                    </nav>
                </div>
                <Link href="/" className="text-xs text-green-200 hover:text-white">← View Site</Link>
            </div>

            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>Customer List</h2>
                        <p className="text-gray-500 text-sm">{mockCustomers.length} registered customers</p>
                    </div>
                </div>

                {/* Search */}
                <div className="relative max-w-sm mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input placeholder="Search by name or email..." className="input-field pl-10 bg-white" />
                </div>

                {/* Table */}
                <div className="bg-white rounded-[12px] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50 text-left">
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Customer</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Contact</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Area</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Orders</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Spent</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Joined</th>
                                    <th className="px-5 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wide">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {mockCustomers.map((c) => (
                                    <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#1B6B3A] text-white flex items-center justify-center font-bold text-sm shrink-0">
                                                    {c.name[0]}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-800">{c.name}</p>
                                                    <p className="text-xs text-gray-400">{c.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex flex-col gap-0.5">
                                                <a href={`mailto:${c.email}`} className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#1B6B3A]">
                                                    <Mail className="w-3 h-3" /> {c.email}
                                                </a>
                                                <a href={`tel:${c.phone}`} className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#1B6B3A]">
                                                    <Phone className="w-3 h-3" /> {c.phone}
                                                </a>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5 text-sm text-gray-600">{c.address}</td>
                                        <td className="px-5 py-3.5 text-sm font-semibold text-gray-800 text-center">{c.totalOrders}</td>
                                        <td className="px-5 py-3.5 text-sm font-bold text-[#1B6B3A]">LKR {c.totalSpent.toLocaleString()}</td>
                                        <td className="px-5 py-3.5 text-xs text-gray-500">{c.joined}</td>
                                        <td className="px-5 py-3.5">
                                            <span className={`badge text-[10px] ${c.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                {c.active ? 'Active' : 'Inactive'}
                                            </span>
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
