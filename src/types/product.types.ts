export type ProductCategory = string;

// Review item
export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

// Dimensions object
export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

// Meta object
export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

// Main Product type
export interface Product {
  id: number;
  title: string;
  description: string;
  category: ProductCategory;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

// API response for product list
export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
