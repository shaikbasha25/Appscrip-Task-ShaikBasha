'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {product.outOfStock && (
              <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-sm">
                OUT OF STOCK
              </div>
            )}
          </div>
          <div className="mt-4 flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            </div>
            <button 
              aria-label="Add to wishlist"
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;