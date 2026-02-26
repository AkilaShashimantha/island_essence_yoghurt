'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { products } from '@/lib/data/products';

const slides = products.filter((p) => p.isActive && p.imageUrl);

export default function HeroSlideshow() {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            // Fade out → swap → fade in
            setVisible(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
                setVisible(true);
            }, 400); // half of the CSS transition duration
        }, 2800);
        return () => clearInterval(timer);
    }, []);

    const product = slides[current];

    return (
        <div className="w-80 h-80 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center animate-float overflow-hidden relative">
            <div className="w-60 h-60 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden relative">
                {/* Product image */}
                <div
                    className="absolute inset-0 rounded-full overflow-hidden transition-opacity duration-500"
                    style={{ opacity: visible ? 1 : 0 }}
                >
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="240px"
                        priority
                    />
                </div>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setVisible(false); setTimeout(() => { setCurrent(i); setVisible(true); }, 400); }}
                            className={`rounded-full transition-all duration-300 ${i === current ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
