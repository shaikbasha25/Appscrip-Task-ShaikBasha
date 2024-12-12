'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import styles from './ProductCard.module.css';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        {product.outOfStock && (
          <div className={styles.outOfStock}>OUT OF STOCK</div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
        <button className={styles.wishlistButton} aria-label="Add to wishlist">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;