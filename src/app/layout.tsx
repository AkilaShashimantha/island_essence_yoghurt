import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

export const metadata: Metadata = {
  title: {
    default: 'Island Essence Coconut Yogurt – Natural, Vegan & Probiotic-Rich',
    template: '%s | Island Essence',
  },
  description:
    'Handcrafted Sri Lankan coconut milk yogurt. 100% vegan, probiotic-rich, no preservatives. Delivered across Colombo. Shop Plain, Blueberry, Vanilla, Strawberry & Honey flavours.',
  keywords: ['coconut yogurt', 'vegan yogurt', 'probiotic', 'Sri Lanka', 'dairy-free', 'Island Essence'],
  openGraph: {
    siteName: 'Island Essence Coconut Yogurt',
    locale: 'en_LK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
