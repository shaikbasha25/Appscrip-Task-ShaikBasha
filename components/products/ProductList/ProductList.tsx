'use client';

import { Product } from '@/types/product';
import ProductCard from '../ProductCard/ProductCard';
import FilterSection from '@/components/filters/FilterSection/FilterSection';
import styles from './ProductList.module.css';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <FilterSection />
      </aside>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;