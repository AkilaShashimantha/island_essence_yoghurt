export type Flavour = 'Plain' | 'Blueberry' | 'Vanilla' | 'Strawberry' | 'Honey' | 'Bulk';

export interface Product {
    id: string;
    slug: string;
    sku: string;
    name: string;
    flavour: Flavour;
    shortDescription: string;
    description: string;
    ingredients: string[];
    nutritionalInfo: { label: string; value: string }[];
    allergenNotes: string;
    size: string;
    price: number;
    stockQty: number;
    isActive: boolean;
    imageUrl: string;
    badge?: string;
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'plain-coconut-milk-yogurt',
        sku: 'IE-001',
        name: 'Plain Coconut Milk Yogurt',
        flavour: 'Plain',
        shortDescription: 'Pure, probiotic-rich coconut milk yogurt — naturally vegan & lactose-free.',
        description:
            'Our signature Plain Coconut Milk Yogurt is handcrafted using fresh, locally sourced Sri Lankan coconut milk. Rich in live probiotic cultures, this creamy yogurt is completely free from preservatives, artificial thickeners, and dairy. The perfect base for smoothies, parfaits, or simply enjoyed on its own.',
        ingredients: [
            'Organic Coconut Milk (95%)',
            'Live Probiotic Cultures (L. acidophilus, B. lactis)',
            'Tapioca Starch',
            'Sea Salt',
        ],
        nutritionalInfo: [
            { label: 'Serving Size', value: '100g' },
            { label: 'Calories', value: '120 kcal' },
            { label: 'Total Fat', value: '11g' },
            { label: 'Saturated Fat', value: '9g' },
            { label: 'Carbohydrates', value: '5g' },
            { label: 'Sugars', value: '2g' },
            { label: 'Protein', value: '1.2g' },
            { label: 'Sodium', value: '45mg' },
        ],
        allergenNotes: 'Tree nuts (coconut). Free from dairy, gluten, soy, and eggs. Produced in a facility that processes tree nuts.',
        size: '100g cup',
        price: 180,
        stockQty: 50,
        isActive: true,
        imageUrl: '/images/plain_coconut_milk_yoghurt.jpeg',
        badge: 'Bestseller',
    },
    {
        id: '2',
        slug: 'blueberry-coconut-milk-yogurt',
        sku: 'IE-002',
        name: 'Blueberry Coconut Milk Yogurt',
        flavour: 'Blueberry',
        shortDescription: 'Vibrant blueberry swirls in silky coconut milk yogurt — antioxidant-packed delight.',
        description:
            'Sun-ripened blueberries blended into our creamy coconut milk yogurt create a vibrant, antioxidant-rich treat. Each spoonful bursts with natural berry sweetness, perfectly balanced with the mild nuttiness of fresh coconut milk. No artificial colours, no added sugar — just pure fruit goodness.',
        ingredients: [
            'Organic Coconut Milk (88%)',
            'Blueberry Puree (10%)',
            'Live Probiotic Cultures',
            'Tapioca Starch',
            'Natural Blueberry Flavour',
        ],
        nutritionalInfo: [
            { label: 'Serving Size', value: '100g' },
            { label: 'Calories', value: '138 kcal' },
            { label: 'Total Fat', value: '10g' },
            { label: 'Saturated Fat', value: '8.5g' },
            { label: 'Carbohydrates', value: '10g' },
            { label: 'Sugars', value: '7g' },
            { label: 'Protein', value: '1.1g' },
            { label: 'Sodium', value: '42mg' },
        ],
        allergenNotes: 'Tree nuts (coconut). Free from dairy, gluten, soy, and eggs.',
        size: '100g cup',
        price: 200,
        stockQty: 35,
        isActive: true,
        imageUrl: '/images/common_coconut_milk_fruit_yoghurt.jpeg',
        badge: 'Popular',
    },
    {
        id: '3',
        slug: 'vanilla-coconut-milk-yogurt',
        sku: 'IE-003',
        name: 'Vanilla Coconut Milk Yogurt',
        flavour: 'Vanilla',
        shortDescription: 'Warm Ceylon vanilla bean infused into creamy coconut milk yogurt.',
        description:
            'Delicate Ceylon vanilla bean extract elevates our signature coconut milk yogurt into a luxuriously smooth, aromatic experience. Inspired by the rich spice heritage of Sri Lanka, this flavour is warm, subtly sweet, and entirely natural. A true tropical indulgence.',
        ingredients: [
            'Organic Coconut Milk (92%)',
            'Live Probiotic Cultures',
            'Ceylon Vanilla Bean Extract (1.5%)',
            'Tapioca Starch',
            'Coconut Blossom Sugar',
        ],
        nutritionalInfo: [
            { label: 'Serving Size', value: '100g' },
            { label: 'Calories', value: '142 kcal' },
            { label: 'Total Fat', value: '10.5g' },
            { label: 'Saturated Fat', value: '9g' },
            { label: 'Carbohydrates', value: '9g' },
            { label: 'Sugars', value: '6g' },
            { label: 'Protein', value: '1.2g' },
            { label: 'Sodium', value: '40mg' },
        ],
        allergenNotes: 'Tree nuts (coconut). Free from dairy, gluten, soy, and eggs.',
        size: '100g cup',
        price: 200,
        stockQty: 40,
        isActive: true,
        imageUrl: '/images/vanilla_coconut_mik_yoghurt.jpeg',
    },
    {
        id: '4',
        slug: 'strawberry-coconut-milk-yogurt',
        sku: 'IE-004',
        name: 'Strawberry Coconut Milk Yogurt',
        flavour: 'Strawberry',
        shortDescription: 'Fresh highland strawberries swirled in velvety coconut milk yogurt.',
        description:
            'Ripe Sri Lankan highland strawberries are blended into our velvety coconut milk yogurt for a bright, refreshing flavour profile. Sweet, slightly tart, and vibrantly pink — this is the flavour that turns any breakfast into a celebration. No artificial dyes, ever.',
        ingredients: [
            'Organic Coconut Milk (87%)',
            'Strawberry Puree (11%)',
            'Live Probiotic Cultures',
            'Tapioca Starch',
            'Natural Strawberry Flavour',
        ],
        nutritionalInfo: [
            { label: 'Serving Size', value: '100g' },
            { label: 'Calories', value: '135 kcal' },
            { label: 'Total Fat', value: '9.8g' },
            { label: 'Saturated Fat', value: '8.2g' },
            { label: 'Carbohydrates', value: '11g' },
            { label: 'Sugars', value: '8g' },
            { label: 'Protein', value: '1.0g' },
            { label: 'Sodium', value: '41mg' },
        ],
        allergenNotes: 'Tree nuts (coconut). Free from dairy, gluten, soy, and eggs.',
        size: '100g cup',
        price: 200,
        stockQty: 30,
        isActive: true,
        imageUrl: '/images/common_coconut_milk_fruit_yoghurt.jpeg',
        badge: 'New',
    },
    {
        id: '5',
        slug: 'coconut-milk-yogurt-with-honey',
        sku: 'IE-005',
        name: 'Coconut Milk Yogurt with Honey',
        flavour: 'Honey',
        shortDescription: 'Raw wildflower honey drizzled into our signature coconut milk yogurt.',
        description:
            'A harmonious marriage of creamy coconut milk yogurt and raw Sri Lankan wildflower honey. Naturally sweet, nutritionally rich, and exquisitely balanced — this variant is our most indulgent offering. The honey is sourced from local apiaries, supporting Sri Lanka\'s indigenous beekeeping communities.',
        ingredients: [
            'Organic Coconut Milk (90%)',
            'Raw Wildflower Honey (8%)',
            'Live Probiotic Cultures',
            'Tapioca Starch',
        ],
        nutritionalInfo: [
            { label: 'Serving Size', value: '100g' },
            { label: 'Calories', value: '158 kcal' },
            { label: 'Total Fat', value: '10g' },
            { label: 'Saturated Fat', value: '8.8g' },
            { label: 'Carbohydrates', value: '14g' },
            { label: 'Sugars', value: '12g' },
            { label: 'Protein', value: '1.1g' },
            { label: 'Sodium', value: '38mg' },
        ],
        allergenNotes: 'Tree nuts (coconut), Honey (not suitable for children under 1 year). Free from dairy, gluten, soy, and eggs.',
        size: '100g cup',
        price: 210,
        stockQty: 25,
        isActive: true,
        imageUrl: '/images/coconut_milk_yoghurt_with_honey.jpeg',
        badge: 'Premium',
    },
    {
        id: '6',
        slug: 'bulk-plain-coconut-milk-yogurt',
        sku: 'IE-006',
        name: 'Bulk Plain (Café / Hotel)',
        flavour: 'Bulk',
        shortDescription: 'Our signature plain yogurt in a 500g tub — ideal for cafés, hotels & bakeries.',
        description:
            'Designed for the hospitality industry, our 500g Bulk Plain Coconut Milk Yogurt delivers the same handcrafted quality as our retail cup, at a scale suited for professional kitchens. Perfect for cooking, baking, salad dressings, or plated desserts. Minimum order 2 tubs.',
        ingredients: [
            'Organic Coconut Milk (95%)',
            'Live Probiotic Cultures (L. acidophilus, B. lactis)',
            'Tapioca Starch',
            'Sea Salt',
        ],
        nutritionalInfo: [
            { label: 'Serving Size', value: '100g' },
            { label: 'Calories', value: '120 kcal' },
            { label: 'Total Fat', value: '11g' },
            { label: 'Saturated Fat', value: '9g' },
            { label: 'Carbohydrates', value: '5g' },
            { label: 'Sugars', value: '2g' },
            { label: 'Protein', value: '1.2g' },
            { label: 'Sodium', value: '45mg' },
        ],
        allergenNotes: 'Tree nuts (coconut). Free from dairy, gluten, soy, and eggs.',
        size: '500g tub',
        price: 800,
        stockQty: 20,
        isActive: true,
        imageUrl: '/images/bulk_plain_yoghurt.jpeg',
        badge: 'B2B',
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug && p.isActive);
}

export function getFilteredProducts(flavour?: string): Product[] {
    if (!flavour || flavour === 'All') return products.filter((p) => p.isActive);
    return products.filter((p) => p.isActive && p.flavour === flavour);
}

export const flavourFilters = ['All', 'Plain', 'Blueberry', 'Vanilla', 'Strawberry', 'Honey', 'Bulk'];
