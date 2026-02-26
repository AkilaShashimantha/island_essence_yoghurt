import type { Metadata } from 'next';
import Link from 'next/link';
import { PlusCircle, Edit, Package } from 'lucide-react';
import { products } from '@/lib/data/products';

export const metadata: Metadata = { title: 'Admin – Products' };

export default function AdminProductsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20">
            <div className="bg-[#1B6B3A] text-white px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>🌿 Island Essence Admin</Link>
                    <nav className="hidden md:flex items-center gap-1 ml-6">
                        {[{ href: '/admin', label: 'Dashboard' }, { href: '/admin/orders', label: 'Orders' }, { href: '/admin/products', label: 'Products', active: true }, { href: '/admin/customers', label: 'Customers' }].map((n) => (
                            <Link key={n.label} href={n.href} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${n.active ? 'bg-white text-[#1B6B3A]' : 'text-green-200 hover:bg-white/10'}`}>{n.label}</Link>
                        ))}
                    </nav>
                </div>
                <Link href="/" className="text-xs text-green-200 hover:text-white">← View Site</Link>
            </div>

            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>Product Management</h2>
                        <p className="text-gray-500 text-sm">{products.length} products in catalogue</p>
                    </div>
                    <button className="btn-primary px-5 py-2.5 text-sm flex items-center gap-2">
                        <PlusCircle className="w-4 h-4" /> Add Product
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-[12px] p-5 shadow-sm border border-gray-100 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F5F0E8] to-[#e8f5ee] flex items-center justify-center text-3xl shrink-0">
                                    {product.flavour === 'Plain' ? '🥛' : product.flavour === 'Blueberry' ? '🫐' : product.flavour === 'Vanilla' ? '🍦' : product.flavour === 'Strawberry' ? '🍓' : product.flavour === 'Honey' ? '🍯' : '🏺'}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-xs text-gray-400">{product.sku}</span>
                                        <span className={`badge text-[10px] ${product.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                            {product.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-sm leading-tight truncate">{product.name}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{product.size}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-bold text-[#1B6B3A]" style={{ fontFamily: 'Playfair Display' }}>
                                        LKR {product.price.toLocaleString()}
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <Package className="w-3 h-3 text-gray-400" />
                                        <p className={`text-xs ${product.stockQty < 10 ? 'text-red-500' : 'text-gray-500'}`}>
                                            {product.stockQty} units in stock
                                        </p>
                                    </div>
                                </div>
                                <button className="p-2 rounded-xl hover:bg-[#F5F0E8] text-gray-400 hover:text-[#1B6B3A] transition-colors">
                                    <Edit className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
