'use client';

import Link from 'next/link';
import { ShoppingCart, ArrowLeft, Minus, Plus, Star, ChevronRight, Check } from 'lucide-react';
import { Product, products } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cartStore';
import { useState } from 'react';
import ProductCard from '@/components/products/ProductCard';

const flavourEmojis: Record<string, string> = {
    Plain: '🥛', Blueberry: '🫐', Vanilla: '🍦', Strawberry: '🍓', Honey: '🍯', Bulk: '🏺',
};

export default function ProductDetailClient({ product }: { product: Product }) {
    const { addItem, openCart } = useCartStore();
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const [activeTab, setActiveTab] = useState<'description' | 'nutrition' | 'allergens'>('description');

    const relatedProducts = products
        .filter((p) => p.isActive && p.id !== product.id)
        .slice(0, 3);

    const handleAddToCart = () => {
        addItem(product, quantity);
        openCart();
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    };

    return (
        <div className="bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#F5F0E8] py-3">
                <div className="container-custom">
                    <nav className="flex items-center gap-2 text-xs text-gray-500">
                        <Link href="/" className="hover:text-[#1B6B3A] transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/products" className="hover:text-[#1B6B3A] transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-gray-800 font-medium truncate max-w-[200px]">{product.name}</span>
                    </nav>
                </div>
            </div>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Product Image */}
                        <div className="animate-fade-in-left sticky top-24">
                            <div className="rounded-[12px] overflow-hidden bg-gradient-to-br from-[#F5F0E8] to-[#e8f5ee] aspect-square flex items-center justify-center relative">
                                {product.badge && (
                                    <div className="absolute top-4 left-4">
                                        <span className="badge bg-[#1B6B3A] text-white">{product.badge}</span>
                                    </div>
                                )}
                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-[160px] animate-float drop-shadow-2xl">
                                        {flavourEmojis[product.flavour] ?? '🥛'}
                                    </span>
                                    <span className="text-xs text-gray-400 uppercase tracking-widest">{product.sku}</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="animate-fade-in-right">
                            <Link href="/products" className="inline-flex items-center gap-1.5 text-[#1B6B3A] text-sm font-medium mb-4 hover:gap-3 transition-all">
                                <ArrowLeft className="w-4 h-4" /> Back to Products
                            </Link>

                            <div className="flex items-center gap-2 mb-2">
                                <span className="badge bg-[#F5F0E8] text-[#1B6B3A]">{product.flavour}</span>
                                <span className="text-xs text-gray-400">{product.size}</span>
                                <span className="text-xs text-gray-400">·</span>
                                <span className="text-xs text-gray-400">SKU: {product.sku}</span>
                            </div>

                            <h1
                                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight"
                                style={{ fontFamily: 'Playfair Display' }}
                            >
                                {product.name}
                            </h1>

                            {/* Stars */}
                            <div className="flex items-center gap-1.5 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" />
                                ))}
                                <span className="text-sm text-gray-500 ml-1">4.9/5 (24 reviews)</span>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6">{product.shortDescription}</p>

                            {/* Price */}
                            <div className="mb-6 p-4 bg-[#F5F0E8] rounded-[12px]">
                                <span className="text-4xl font-bold text-[#1B6B3A]" style={{ fontFamily: 'Playfair Display' }}>
                                    LKR {product.price.toLocaleString()}
                                </span>
                                <span className="text-sm text-gray-500 ml-2">per {product.size}</span>
                            </div>

                            {/* Stock */}
                            {product.stockQty > 0 ? (
                                <div className="flex items-center gap-2 text-green-600 text-sm mb-4">
                                    <Check className="w-4 h-4" />
                                    <span>In stock ({product.stockQty} available)</span>
                                </div>
                            ) : (
                                <div className="text-red-500 text-sm mb-4">Out of stock</div>
                            )}

                            {/* Qty */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-sm font-medium text-gray-700">Quantity</span>
                                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-600"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-semibold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-gray-600"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <span className="text-sm text-gray-500">
                                    Total: <strong className="text-[#1B6B3A]">LKR {(product.price * quantity).toLocaleString()}</strong>
                                </span>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3 mb-8">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={product.stockQty === 0}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-[24px] font-semibold transition-all ${added
                                        ? 'bg-green-500 text-white'
                                        : 'btn-primary'
                                        }`}
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    {added ? '✓ Added to Cart!' : 'Add to Cart'}
                                </button>
                                <Link
                                    href="/checkout"
                                    className="btn-outline py-3.5 px-6 text-sm font-semibold"
                                >
                                    Buy Now
                                </Link>
                            </div>

                            {/* Tabs */}
                            <div className="border border-gray-200 rounded-[12px] overflow-hidden">
                                <div className="flex border-b border-gray-200">
                                    {(['description', 'nutrition', 'allergens'] as const).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wide transition-all ${activeTab === tab
                                                ? 'bg-[#1B6B3A] text-white'
                                                : 'text-gray-500 hover:bg-gray-50'
                                                }`}
                                        >
                                            {tab === 'description' ? 'Details' : tab === 'nutrition' ? 'Nutrition' : 'Allergens'}
                                        </button>
                                    ))}
                                </div>

                                <div className="p-5">
                                    {activeTab === 'description' && (
                                        <div>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-4">{product.description}</p>
                                            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Ingredients</h4>
                                            <ul className="space-y-1">
                                                {product.ingredients.map((ing) => (
                                                    <li key={ing} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] shrink-0" />
                                                        {ing}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {activeTab === 'nutrition' && (
                                        <table className="w-full text-sm">
                                            <tbody>
                                                {product.nutritionalInfo.map((item) => (
                                                    <tr key={item.label} className="border-b border-gray-100 last:border-0">
                                                        <td className="py-2 text-gray-500">{item.label}</td>
                                                        <td className="py-2 text-right font-semibold text-gray-800">{item.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                    {activeTab === 'allergens' && (
                                        <div className="text-sm text-gray-600 leading-relaxed">
                                            <p>{product.allergenNotes}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-20">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display' }}>
                            You Might Also Like
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
