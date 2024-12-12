'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, User, Search } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            LOGO
          </Link>

          <ul className={styles.menu}>
            <li><Link href="/shop" className={styles.menuItem}>Shop</Link></li>
            <li><Link href="/skills" className={styles.menuItem}>Skills</Link></li>
            <li><Link href="/stories" className={styles.menuItem}>Stories</Link></li>
            <li><Link href="/about" className={styles.menuItem}>About</Link></li>
            <li><Link href="/contact" className={styles.menuItem}>Contact Us</Link></li>
          </ul>

          <div className={styles.icons}>
            <button type="button" className={styles.iconButton} aria-label="Search">
              <Search size={20} />
            </button>
            <button type="button" className={styles.iconButton} aria-label="Wishlist">
              <Heart size={20} />
            </button>
            <button type="button" className={styles.iconButton} aria-label="Cart">
              <ShoppingCart size={20} />
            </button>
            <button type="button" className={styles.iconButton} aria-label="Account">
              <User size={20} />
            </button>
            <select className={styles.languageSelect} aria-label="Select language">
              <option value="eng">ENG</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}