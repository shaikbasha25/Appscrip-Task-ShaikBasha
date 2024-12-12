import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discover Our Products - Premium Fashion & Accessories',
  description: 'Explore our curated collection of premium fashion items, accessories, and lifestyle products.',
  openGraph: {
    title: 'Discover Our Products - Premium Fashion & Accessories',
    description: 'Explore our curated collection of premium fashion items, accessories, and lifestyle products.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Our Products - Premium Fashion & Accessories',
    description: 'Explore our curated collection of premium fashion items, accessories, and lifestyle products.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}