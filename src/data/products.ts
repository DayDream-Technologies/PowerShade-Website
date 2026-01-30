export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  badge?: 'bestseller' | 'new' | 'sale'
  category: 'umbrella' | 'accessory' | 'bundle'
}

export const products: Product[] = [
  {
    id: 'classic',
    name: 'PowerShade Classic',
    description: 'Our original solar beach umbrella with integrated 25W panels and dual charging ports.',
    price: 359.99,
    image: '/images/Product photo.png',
    rating: 5,
    reviewCount: 124,
    badge: 'bestseller',
    category: 'umbrella',
  },
  {
    id: 'pro',
    name: 'PowerShade Pro',
    description: 'Enhanced 40W solar array with faster charging, wireless charging pad, and integrated battery storage.',
    price: 499.99,
    image: '/images/pro-product-photo.png',
    rating: 5,
    reviewCount: 86,
    badge: 'new',
    category: 'umbrella',
  },
  {
    id: 'mini',
    name: 'PowerShade Mini',
    description: 'Compact size perfect for personal use, with 15W solar panels and single USB port.',
    price: 259.99,
    image: '/images/Mini Product Photo.png',
    rating: 4,
    reviewCount: 93,
    category: 'umbrella',
  },
  {
    id: 'accessory-pack',
    name: 'PowerShade Accessory Pack',
    description: 'Complete your setup with our heavy-duty sand anchor, protective case, and backup battery pack.',
    price: 139.99,
    image: '/images/Accessory Pack.png',
    rating: 5,
    reviewCount: 108,
    category: 'accessory',
  },
  {
    id: 'family-bundle',
    name: 'Family Bundle',
    description: 'One PowerShade Pro, one PowerShade Mini, and essential accessories for the perfect family beach day.',
    price: 699.99,
    originalPrice: 799.99,
    image: '/images/Family Pack.png',
    rating: 5,
    reviewCount: 57,
    badge: 'sale',
    category: 'bundle',
  },
]

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category)
}
