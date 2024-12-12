'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, User, Search } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          LOGO
        </Link>

        <div className={styles.menu}>
          <Link href="/shop" className={styles.menuItem}>SHOP</Link>
          <Link href="/skills" className={styles.menuItem}>SKILLS</Link>
          <Link href="/stories" className={styles.menuItem}>STORIES</Link>
          <Link href="/about" className={styles.menuItem}>ABOUT</Link>
          <Link href="/contact" className={styles.menuItem}>CONTACT US</Link>
        </div>

        <div className={styles.icons}>
          <button aria-label="Search" className={styles.iconButton}>
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Wishlist" className={styles.iconButton}>
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className={styles.iconButton}>
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button aria-label="Account" className={styles.iconButton}>
            <User className="w-5 h-5" />
          </button>
          <select className={styles.languageSelect}>
            <option value="eng">ENG</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;