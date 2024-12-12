import { Metadata } from 'next';
import ProductList from '@/components/products/ProductList/ProductList';

export const metadata: Metadata = {
  title: 'Discover Our Products - Premium Fashion & Accessories',
  description: 'Explore our curated collection of premium fashion items, accessories, and lifestyle products.',
  openGraph: {
    title: 'Discover Our Products',
    description: 'Explore our curated collection of premium fashion items and accessories.',
    images: ['/og-image.jpg'],
  },
};

export default async function Home() {
  // Fetch products from API
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json());

  return (
    <div className="container">
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      <ProductList products={products} />
    </div>
  );
}