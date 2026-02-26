'use client';

import Link from 'next/link';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Product } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cartStore';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
}

const flavourColors: Record<string, string> = {
    Plain: 'bg-gray-100 text-gray-700',
    Blueberry: 'bg-purple-100 text-purple-700',
    Vanilla: 'bg-amber-100 text-amber-700',
    Strawberry: 'bg-pink-100 text-pink-700',
    Honey: 'bg-yellow-100 text-yellow-700',
    Bulk: 'bg-green-100 text-green-700',
};

const flavourEmojis: Record<string, string> = {
    Plain: '🥛',
    Blueberry: '🫐',
    Vanilla: '🍦',
    Strawberry: '🍓',
    Honey: '🍯',
    Bulk: '🏺',
};

const badgeColors: Record<string, string> = {
    Bestseller: 'bg-[#1B6B3A] text-white',
    Popular: 'bg-[#D4A843] text-white',
    New: 'bg-pink-500 text-white',
    Premium: 'bg-purple-600 text-white',
    B2B: 'bg-blue-600 text-white',
};

export default function ProductCard({ product }: ProductCardProps) {
    const { addItem, openCart } = useCartStore();
    const [added, setAdded] = useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addItem(product);
        openCart();
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    const isOutOfStock = product.stockQty === 0;

    return (
        <div className="card-hover rounded-[12px] bg-white border border-gray-100 overflow-hidden shadow-sm group">
            {/* Image area */}
            <Link href={`/products/${product.slug}`} className="block relative">
                <div className="relative aspect-square bg-gradient-to-br from-[#F5F0E8] to-[#e8f5ee] overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/40" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/60 flex items-center justify-center">
                        <span className="text-5xl animate-float">
                            {flavourEmojis[product.flavour] ?? '🥛'}
                        </span>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.badge && (
                            <span className={`badge text-[10px] ${badgeColors[product.badge] ?? 'bg-gray-200 text-gray-700'}`}>
                                {product.badge}
                            </span>
                        )}
                        {isOutOfStock && (
                            <span className="badge bg-red-100 text-red-600 text-[10px]">Out of Stock</span>
                        )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#1B6B3A]/0 group-hover:bg-[#1B6B3A]/10 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <span className="glass flex items-center gap-1.5 text-xs font-semibold text-[#1B6B3A] px-3 py-1.5 rounded-full">
                                <Eye className="w-3.5 h-3.5" /> Quick View
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                    <span className={`badge text-[10px] ${flavourColors[product.flavour] ?? 'bg-gray-100 text-gray-700'}`}>
                        {product.flavour}
                    </span>
                    <span className="text-[11px] text-gray-400">{product.size}</span>
                </div>

                <Link href={`/products/${product.slug}`}>
                    <h3 className="font-bold text-gray-800 text-sm leading-snug mb-1 hover:text-[#1B6B3A] transition-colors" style={{ fontFamily: 'Playfair Display' }}>
                        {product.name}
                    </h3>
                </Link>

                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {product.shortDescription}
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#D4A843] text-[#D4A843]" />
                    ))}
                    <span className="text-[11px] text-gray-400 ml-1">(12)</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-lg font-bold text-[#1B6B3A]">
                            LKR {product.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 ml-1">/ {product.size}</span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-[20px] text-xs font-semibold transition-all ${isOutOfStock
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : added
                                ? 'bg-green-500 text-white scale-95'
                                : 'bg-[#1B6B3A] text-white hover:bg-[#2a8a4e] hover:shadow-md hover:-translate-y-0.5'
                            }`}
                    >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        {added ? 'Added!' : 'Add'}
                    </button>
                </div>
            </div>
        </div>
    );
}
