'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { products, flavourFilters } from '@/lib/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function ProductsPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products
        .filter((p) => p.isActive)
        .filter((p) => activeFilter === 'All' || p.flavour === activeFilter)
        .filter(
            (p) =>
                !searchTerm ||
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.flavour.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <>
            {/* Hero Banner */}
            <section
                className="py-20 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #F5F0E8, #ede6d5)' }}
            >
                <div className="container-custom relative z-10">
                    <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">
                        Our Range
                    </span>
                    <h1
                        className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4"
                        style={{ fontFamily: 'Playfair Display' }}
                    >
                        Coconut Milk Yogurt
                    </h1>
                    <div className="divider-gold mx-auto mb-5" />
                    <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
                        Six handcrafted flavours, all made from locally sourced Sri Lankan coconut milk.
                        No preservatives. No artificial additives. Just pure goodness.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    {/* Search + Filter Bar */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search flavours..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input-field pl-10"
                            />
                        </div>

                        {/* Filter tabs */}
                        <div className="flex items-center gap-1 flex-wrap">
                            <SlidersHorizontal className="w-4 h-4 text-gray-400 mr-1" />
                            {flavourFilters.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeFilter === f
                                            ? 'bg-[#1B6B3A] text-white shadow-sm'
                                            : 'bg-gray-100 text-gray-600 hover:bg-[#F5F0E8] hover:text-[#1B6B3A]'
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <p className="text-sm text-gray-500 mb-6">
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                    </p>

                    {/* Products Grid */}
                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-20">
                            <span className="text-6xl mb-4 block">🔍</span>
                            <h3 className="text-xl font-bold text-gray-700 mb-2" style={{ fontFamily: 'Playfair Display' }}>
                                No products found
                            </h3>
                            <p className="text-gray-500 text-sm">Try adjusting your filter or search term.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}

                    {/* Info strip */}
                    <div className="mt-16 p-6 rounded-[12px] bg-[#F5F0E8] flex flex-col sm:flex-row items-center gap-4 justify-between">
                        <div>
                            <p className="font-bold text-gray-800 mb-1">Delivery Information</p>
                            <p className="text-sm text-gray-600">
                                Flat LKR 150 delivery fee · Colombo 1–7 only · Minimum order LKR 360 (2 cups)
                            </p>
                        </div>
                        <span className="badge bg-[#1B6B3A] text-white text-xs px-4 py-1.5">Free above LKR 1,500</span>
                    </div>
                </div>
            </section>
        </>
    );
}
