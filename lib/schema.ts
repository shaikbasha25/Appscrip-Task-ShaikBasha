export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": "product-image-url",
  "description": "Product description",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0.00",
    "priceCurrency": "USD"
  }
};