import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: '莲花 - Jeans',
    nameChinese: '莲花',
    slug: 'lianhua-jeans',
    description: '15.5oz raw denim / 100% cotton / embroidery on front and back / embroidered patch / straight fit / stone washed / fits true to size\n\nModel (height 182) wears size M\n\nACHTUNG: PRE ORDER Die Produktion startet, sobald mindestens 50 Bestellungen erreicht sind. Wenn diese Anzahl nicht erreicht wird, wird der volle Betrag zurück erstattet!',
    price: 75.00,
    currency: 'EUR',
    images: [
      '/images/products/Jeans/Jeans 1.webp',
      '/images/products/Jeans/Jeans 2.webp',
      '/images/products/Jeans/Jeans 3.webp',
      '/images/products/Jeans/Jeans 4.webp',
      '/images/products/Jeans/Jeans 5.webp',
      '/images/products/Jeans/Jeans 6.webp',
      '/images/products/Jeans/Jeans 7.webp',
      '/images/products/Jeans/Jeans 8.webp',
      '/images/products/Jeans/Jeans 9.webp',
      '/images/products/Jeans/Jeans 10.webp',
    ],
    category: 'Bottoms',
    available: false,
    preOrder: true,
    featured: true,
  },
  {
    id: '2',
    name: '梦想 Jogger',
    nameChinese: '梦想',
    slug: 'mengxiang-jogger',
    description: '500gsm / 100% cotton / embroidery on back pocket / embroidered patch / straight fit / fits true to size\n\nModel (height 182) wears size M\n\nACHTUNG: Deine Bestellung wird automatisch versendet, sobald die Jogger wieder verfügbar ist.',
    price: 69.99,
    currency: 'EUR',
    images: [
      '/images/products/Jogger/Jogger 1.webp',
      '/images/products/Jogger/Jogger 2.webp',
      '/images/products/Jogger/Jogger 3.webp',
      '/images/products/Jogger/Jogger 4.webp',
      '/images/products/Jogger/Jogger 5.webp',
      '/images/products/Jogger/Jogger 6.webp',
      '/images/products/Jogger/Jogger 7.webp',
    ],
    category: 'Bottoms',
    available: false,
    preOrder: true,
    featured: true,
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
