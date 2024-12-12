'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>METTA MUSE</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/stories">Stories</Link></li>
              <li><Link href="/artisans">Artisans</Link></li>
              <li><Link href="/boutiques">Boutiques</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/eu-compliance">EU Compliance Docs</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link href="/orders">Orders & Shipping</Link></li>
              <li><Link href="/join">Join/Login as a Seller</Link></li>
              <li><Link href="/payment">Payment & Pricing</Link></li>
              <li><Link href="/return">Return & Refunds</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>FOLLOW US</h4>
            <div className={styles.social}>
              <Link href="https://instagram.com" target="_blank">Instagram</Link>
              <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
            </div>
            
            <h4 className={styles.paymentTitle}>METTA MUSE ACCEPTS</h4>
            <div className={styles.paymentMethods}>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>Amex</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;