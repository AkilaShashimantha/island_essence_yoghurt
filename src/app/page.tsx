import Link from 'next/link';
import { ArrowRight, Leaf, Heart, Shield, Star, ChevronRight, Package } from 'lucide-react';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/products/ProductCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Island Essence Coconut Yogurt – Natural, Vegan & Probiotic-Rich',
  description:
    'Handcrafted Sri Lankan coconut milk yogurt. 100% vegan, probiotic-rich. Shop Online, delivered across Colombo.',
};

const featuredProducts = products.filter((p) => p.isActive).slice(0, 3);

const values = [
  {
    icon: Leaf,
    title: 'Naturally Crafted',
    desc: 'No preservatives, no artificial thickeners. Just pure coconut milk and live cultures.',
    color: '#1B6B3A',
    bg: '#e8f5ee',
  },
  {
    icon: Heart,
    title: 'Gut-Friendly Probiotics',
    desc: 'Rich in L. acidophilus & B. lactis cultures to support your digestive wellness.',
    color: '#D4A843',
    bg: '#fdf6e8',
  },
  {
    icon: Shield,
    title: 'Vegan & Dairy-Free',
    desc: 'Perfect for lactose intolerance, vegans, and anyone seeking a cleaner alternative.',
    color: '#1B6B3A',
    bg: '#e8f5ee',
  },
  {
    icon: Package,
    title: 'Eco-Friendly Packaging',
    desc: 'Committed to sustainable packaging and reducing our environmental footprint.',
    color: '#D4A843',
    bg: '#fdf6e8',
  },
];

const testimonials = [
  {
    name: 'Dilini Perera',
    location: 'Colombo 3',
    text: 'I switched to Island Essence after years of struggling with dairy. The Honey flavour is absolutely divine — and my gut has never been happier!',
    rating: 5,
  },
  {
    name: 'Roshan Fernando',
    location: 'Colombo 7',
    text: 'As a chef, I use the bulk tub in our restaurant. The quality is consistent and our guests love the natural flavour. Best local yogurt, hands down.',
    rating: 5,
  },
  {
    name: 'Amara Jayasinghe',
    location: 'Colombo 5',
    text: 'My kids absolutely love the Strawberry and Blueberry flavours. Knowing it\'s free of artificial colours and preservatives makes me feel great about giving it to them.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ──────────────────── HERO ──────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(15,61,34,0.82) 0%, rgba(27,107,58,0.80) 50%, rgba(42,138,78,0.78) 100%), url(/images/bg_background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Decorative orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 bg-[#D4A843]" style={{ filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 bg-white" style={{ filter: 'blur(40px)' }} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border-2 border-white/10 animate-spin-slow" />

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Copy */}
          <div className="animate-fade-in-left">
            <span className="inline-flex items-center gap-2 text-[#D4A843] text-sm font-semibold uppercase tracking-widest mb-4">
              <Leaf className="w-4 h-4" /> Sri Lankan Craft Yogurt
            </span>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Taste the{' '}
              <span className="italic text-[#D4A843]">Essence</span>
              <br />of the Island
            </h1>
            <p className="text-lg text-green-100 leading-relaxed mb-8 max-w-lg">
              Handcrafted coconut milk yogurt — 100% vegan, probiotic-rich, with no preservatives.
              Sourced locally, made with love, delivered to your door.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="btn-gold flex items-center gap-2 px-7 py-3.5 text-base"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white border-2 border-white/30 rounded-[24px] hover:bg-white/10 transition-all"
              >
                Our Story
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-xs text-green-300 uppercase tracking-wide">Happy Customers</p>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">6</p>
                <p className="text-xs text-green-300 uppercase tracking-wide">Unique Flavours</p>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">0</p>
                <p className="text-xs text-green-300 uppercase tracking-wide">Preservatives</p>
              </div>
            </div>
          </div>

          {/* Right: Hero visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center animate-float">
                <div className="w-60 h-60 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <span className="text-[120px] drop-shadow-2xl">🥛</span>
                </div>
              </div>
              {/* Floating product chips */}
              {[
                { emoji: '🫐', label: 'Blueberry', color: 'from-purple-400 to-purple-600', pos: 'top-0 left-0 -translate-x-8 -translate-y-4' },
                { emoji: '🍓', label: 'Strawberry', color: 'from-pink-400 to-rose-500', pos: 'top-0 right-0 translate-x-8 -translate-y-4' },
                { emoji: '🍯', label: 'Honey', color: 'from-amber-400 to-yellow-500', pos: 'bottom-0 left-0 -translate-x-8 translate-y-2' },
                { emoji: '🍦', label: 'Vanilla', color: 'from-amber-300 to-orange-400', pos: 'bottom-0 right-0 translate-x-8 translate-y-2' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className={`absolute ${chip.pos} glass flex items-center gap-2 px-4 py-2 rounded-full shadow-lg`}
                >
                  <span className="text-lg">{chip.emoji}</span>
                  <span className="text-white text-xs font-semibold">{chip.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ──────────────────── VALUES ──────────────────── */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">Why Island Essence</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display' }}>
              Crafted with Purpose
            </h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="card-hover p-6 rounded-[12px] bg-white border border-gray-100 text-center animate-fade-in"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-base" style={{ fontFamily: 'Playfair Display' }}>
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── FEATURED PRODUCTS ──────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">Our Range</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display' }}>
                Featured Flavours
              </h2>
              <div className="divider-gold mt-4" />
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-1.5 text-[#1B6B3A] font-semibold text-sm hover:gap-3 transition-all"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/products" className="btn-outline px-8 py-3 inline-block text-sm">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────── BRAND STORY BANNER ──────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F5F0E8, #ede6d5)' }}
      >
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">Our Story</span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Born from the Heart of Sri Lanka
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Island Essence was born from a simple truth: Sri Lanka's coconuts are among the finest in the world, yet there was no premium coconut milk yogurt on the market. We set out to change that.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every cup is handcrafted in small batches, using fresh coconut milk sourced from local farmers, and cultured with live probiotics that are good for your gut and the planet.
            </p>
            <Link href="/about" className="btn-primary px-7 py-3 inline-flex items-center gap-2 text-sm">
              Meet the Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
            {[
              { emoji: '🌴', label: 'Locally Sourced', value: '100%' },
              { emoji: '🧫', label: 'Live Cultures', value: '2 Strains' },
              { emoji: '🌿', label: 'Preservative Free', value: 'Always' },
              { emoji: '⚡', label: 'Delivery', value: 'Colombo' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-[12px] p-5 text-center shadow-sm card-hover">
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-2xl font-bold text-[#1B6B3A]" style={{ fontFamily: 'Playfair Display' }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── SUSTAINABILITY STRIP ──────────────────── */}
      <section
        style={{ background: '#1B6B3A' }}
        className="py-12"
      >
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white">
            <Leaf className="w-8 h-8 text-[#D4A843]" />
            <div>
              <p className="font-bold text-lg" style={{ fontFamily: 'Playfair Display' }}>
                Aligned with UN Sustainable Development Goals
              </p>
              <p className="text-green-200 text-sm">SDG 3 (Good Health) · SDG 8 (Decent Work) · SDG 12 (Responsible Consumption)</p>
            </div>
          </div>
          <Link href="/sustainability" className="btn-gold px-6 py-2.5 text-sm shrink-0">
            Learn More
          </Link>
        </div>
      </section>

      {/* ──────────────────── TESTIMONIALS ──────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[#D4A843] text-sm font-semibold uppercase tracking-widest">Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display' }}>
              What Our Customers Say
            </h2>
            <div className="divider-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover p-6 rounded-[12px] border border-gray-100 bg-[#F5F0E8]/50"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1B6B3A] flex items-center justify-center text-white text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── CTA BANNER ──────────────────── */}
      <section
        className="py-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f3d22, #1B6B3A, #2a8a4e)' }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #D4A843 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="container-custom relative z-10">
          <h2
            className="text-3xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Ready to Try{' '}
            <span className="italic text-[#D4A843]">Island Essence?</span>
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-lg mx-auto">
            Order online and get fresh coconut milk yogurt delivered to your door in Colombo.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/products" className="btn-gold px-8 py-3.5 text-base flex items-center gap-2">
              Order Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/faq" className="text-white/80 text-sm underline underline-offset-4 hover:text-white transition-colors">
              Have questions? Check our FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
