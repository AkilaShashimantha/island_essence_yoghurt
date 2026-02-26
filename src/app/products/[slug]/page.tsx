import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/data/products';
import ProductDetailClient from './ProductDetailClient';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    return {
        title: product?.name ?? 'Product Not Found',
        description: product?.shortDescription,
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) notFound();

    return <ProductDetailClient product={product} />;
}
