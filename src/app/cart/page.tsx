'use client';

import Link from 'next/link';
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight, Truck, AlertCircle } from 'lucide-react';
import { useCartStore } from '@/lib/store/cartStore';

const flavourEmojis: Record<string, string> = {
    Plain: '🥛', Blueberry: '🫐', Vanilla: '🍦', Strawberry: '🍓', Honey: '🍯', Bulk: '🏺',
};

export default function CartPage() {
    const { items, removeItem, updateQuantity, getSubtotal, getDeliveryFee, getTotal } = useCartStore();
    const subtotal = getSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = getTotal();
    const minOrder = 360;
    const meetsMinOrder = subtotal >= minOrder;

    return (
        <div className="bg-[#F5F0E8]/30 min-h-screen">
            <section className="pt-32 pb-12 bg-[#F5F0E8]">
                <div className="container-custom">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                        Shopping Cart
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        {items.length > 0 ? `${items.reduce((s, i) => s + i.quantity, 0)} items in your cart` : 'Your cart is empty'}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    {items.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-[12px]">
                            <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-gray-700 mb-2" style={{ fontFamily: 'Playfair Display' }}>
                                Your cart is empty
                            </h2>
                            <p className="text-gray-500 mb-6">Head to our shop and find your favourite flavour!</p>
                            <Link href="/products" className="btn-primary px-8 py-3 inline-block">
                                Browse Products
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Items */}
                            <div className="lg:col-span-2 space-y-4">
                                {items.map(({ product, quantity }) => (
                                    <div key={product.id} className="bg-white rounded-[12px] p-5 flex gap-4 items-start shadow-sm">
                                        {/* Image */}
                                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#F5F0E8] to-[#e8f5ee] flex items-center justify-center shrink-0 text-3xl">
                                            {flavourEmojis[product.flavour] ?? '🥛'}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <div>
                                                    <Link
                                                        href={`/products/${product.slug}`}
                                                        className="font-bold text-gray-800 hover:text-[#1B6B3A] transition-colors text-sm"
                                                        style={{ fontFamily: 'Playfair Display' }}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                    <p className="text-xs text-gray-400 mt-0.5">{product.size} · SKU: {product.sku}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(product.id)}
                                                    className="p-1.5 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors"
                                                    aria-label="Remove"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                                    <button onClick={() => updateQuantity(product.id, quantity - 1)}
                                                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-600">
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                                                    <button onClick={() => updateQuantity(product.id, quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-600">
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-[#1B6B3A] text-base">
                                                        LKR {(product.price * quantity).toLocaleString()}
                                                    </p>
                                                    <p className="text-xs text-gray-400">LKR {product.price} each</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <Link href="/products" className="flex items-center gap-2 text-sm text-[#1B6B3A] font-semibold mt-2 hover:gap-3 transition-all">
                                    ← Continue Shopping
                                </Link>
                            </div>

                            {/* Order Summary */}
                            <div>
                                <div className="bg-white rounded-[12px] p-6 shadow-sm">
                                    <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'Playfair Display' }}>
                                        Order Summary
                                    </h2>

                                    <div className="space-y-3 mb-5">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span>LKR {subtotal.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600 flex items-center gap-1">
                                                <Truck className="w-3.5 h-3.5" /> Delivery fee
                                            </span>
                                            <span>LKR {deliveryFee.toLocaleString()}</span>
                                        </div>
                                        <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-base">
                                            <span>Total</span>
                                            <span className="text-[#1B6B3A]">LKR {total.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {!meetsMinOrder && (
                                        <div className="flex gap-2 text-xs text-amber-600 bg-amber-50 rounded-lg p-3 mb-4">
                                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                            <span>Minimum order is LKR {minOrder}. Add LKR {minOrder - subtotal} more.</span>
                                        </div>
                                    )}

                                    <Link
                                        href="/checkout"
                                        className={`btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-sm ${!meetsMinOrder ? 'opacity-50 pointer-events-none' : ''}`}
                                    >
                                        Proceed to Checkout <ArrowRight className="w-4 h-4" />
                                    </Link>

                                    <div className="mt-4 space-y-1.5 text-xs text-gray-400 text-center">
                                        <p>🔒 Secure checkout via PayHere</p>
                                        <p>📍 Delivery: Colombo 1–7 only</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
