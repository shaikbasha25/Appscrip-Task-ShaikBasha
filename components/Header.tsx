'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, User, Search } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b">
      <nav className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            LOGO
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="hover:text-gray-600">SHOP</Link>
            <Link href="/skills" className="hover:text-gray-600">SKILLS</Link>
            <Link href="/stories" className="hover:text-gray-600">STORIES</Link>
            <Link href="/about" className="hover:text-gray-600">ABOUT</Link>
            <Link href="/contact" className="hover:text-gray-600">CONTACT US</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <select className="border-none bg-transparent">
              <option value="eng">ENG</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;