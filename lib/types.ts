export interface Product {
  id: string;
  name: string;
  nameChinese?: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  available: boolean;
  preOrder: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
