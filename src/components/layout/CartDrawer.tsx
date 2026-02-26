'use client';

import Link from 'next/link';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store/cartStore';

export default function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal, getDeliveryFee, getTotal } =
        useCartStore();

    const subtotal = getSubtotal();
    const deliveryFee = getDeliveryFee();
    const total = getTotal();
    const minOrder = 360;
    const meetsMinOrder = subtotal >= minOrder;

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70]"
                    onClick={closeCart}
                />
            )}

            {/* Drawer panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[80] shadow-2xl flex flex-col transition-transform duration-350 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-[#1B6B3A]" />
                        <h2 style={{ fontFamily: 'Playfair Display' }} className="text-lg font-bold text-gray-900">
                            My Cart
                        </h2>
                        {items.length > 0 && (
                            <span className="badge bg-[#1B6B3A] text-white text-xs ml-1">
                                {items.reduce((s, i) => s + i.quantity, 0)}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={closeCart}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                        aria-label="Close cart"
                    >
                        <X className="w-4 h-4 text-gray-600" />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="w-20 h-20 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-4">
                                <ShoppingBag className="w-9 h-9 text-[#1B6B3A]/40" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">Your cart is empty</h3>
                            <p className="text-sm text-gray-500 mb-5">Add some delicious yogurt!</p>
                            <Link
                                href="/products"
                                onClick={closeCart}
                                className="btn-primary px-6 py-2.5 text-sm"
                            >
                                Browse Products
                            </Link>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {items.map(({ product, quantity }) => (
                                <li key={product.id} className="flex gap-3 p-3 rounded-xl bg-[#F5F0E8]/50">
                                    {/* Image placeholder */}
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1B6B3A]/20 to-[#D4A843]/20 flex items-center justify-center shrink-0 text-2xl">
                                        🥛
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
                                        <p className="text-xs text-gray-500 mb-2">{product.size}</p>
                                        <div className="flex items-center justify-between">
                                            {/* Qty controls */}
                                            <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(product.id, quantity - 1)}
                                                    className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-7 text-center text-sm font-semibold">{quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(product.id, quantity + 1)}
                                                    className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-[#1B6B3A]">
                                                    LKR {(product.price * quantity).toLocaleString()}
                                                </span>
                                                <button
                                                    onClick={() => removeItem(product.id)}
                                                    className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-gray-100 px-6 py-5 space-y-3">
                        {/* Min order warning */}
                        {!meetsMinOrder && (
                            <div className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2 flex items-start gap-1.5">
                                <span>⚠️</span>
                                <span>Minimum order is LKR {minOrder}. Add LKR {minOrder - subtotal} more to checkout.</span>
                            </div>
                        )}

                        {/* Totals */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Subtotal</span>
                                <span>LKR {subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Delivery (Colombo 1–7)</span>
                                <span>LKR {deliveryFee.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-900 pt-1 border-t border-gray-200">
                                <span>Total</span>
                                <span className="text-[#1B6B3A]">LKR {total.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-2 pt-1">
                            <Link
                                href="/checkout"
                                onClick={closeCart}
                                className={`btn-primary w-full py-3 text-center block text-sm ${!meetsMinOrder ? 'opacity-50 pointer-events-none' : ''
                                    }`}
                            >
                                Proceed to Checkout
                            </Link>
                            <Link
                                href="/cart"
                                onClick={closeCart}
                                className="btn-outline w-full py-2.5 text-center block text-sm"
                            >
                                View Cart
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
