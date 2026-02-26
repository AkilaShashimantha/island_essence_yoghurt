import type { Metadata } from 'next';
import Link from 'next/link';
import { User, ShoppingBag, MapPin, Settings, ChevronRight } from 'lucide-react';

export const metadata: Metadata = { title: 'My Account' };

const mockUser = {
    name: 'Dilini Perera',
    email: 'dilini@example.com',
    phone: '+94 77 123 4567',
    joinedDate: 'January 2026',
    totalOrders: 8,
    totalSpent: 2840,
};

export default function AccountPage() {
    const menuItems = [
        { href: '/account/orders', icon: ShoppingBag, label: 'My Orders', desc: `${mockUser.totalOrders} orders` },
        { href: '/account', icon: MapPin, label: 'Delivery Addresses', desc: '2 saved addresses' },
        { href: '/account', icon: Settings, label: 'Account Settings', desc: 'Update profile & password' },
    ];

    return (
        <div className="bg-[#F5F0E8]/30 min-h-screen">
            <section className="py-12 bg-[#F5F0E8]">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>My Account</h1>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom max-w-3xl">
                    {/* Profile card */}
                    <div className="bg-white rounded-[12px] p-6 shadow-sm mb-6 flex items-center gap-5">
                        <div className="w-16 h-16 rounded-full bg-[#1B6B3A] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                            {mockUser.name[0]}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>{mockUser.name}</h2>
                            <p className="text-sm text-gray-500">{mockUser.email}</p>
                            <p className="text-xs text-gray-400 mt-0.5">Member since {mockUser.joinedDate}</p>
                        </div>
                        <div className="hidden sm:flex gap-4 text-center">
                            <div>
                                <p className="text-2xl font-bold text-[#1B6B3A]">{mockUser.totalOrders}</p>
                                <p className="text-xs text-gray-400">Orders</p>
                            </div>
                            <div className="w-px bg-gray-100" />
                            <div>
                                <p className="text-2xl font-bold text-[#1B6B3A]">LKR {mockUser.totalSpent.toLocaleString()}</p>
                                <p className="text-xs text-gray-400">Spent</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="space-y-3">
                        {menuItems.map(({ href, icon: Icon, label, desc }) => (
                            <Link key={label} href={href} className="bg-white rounded-[12px] p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow card-hover group">
                                <div className="w-11 h-11 rounded-xl bg-[#1B6B3A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B6B3A] transition-colors">
                                    <Icon className="w-5 h-5 text-[#1B6B3A] group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">{label}</p>
                                    <p className="text-xs text-gray-500">{desc}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1B6B3A] transition-colors" />
                            </Link>
                        ))}
                    </div>

                    {/* Logout */}
                    <div className="mt-6">
                        <Link href="/" className="text-sm text-red-400 hover:text-red-600 transition-colors">
                            Sign Out
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
