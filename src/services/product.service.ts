import type { Product, ProductsResponse } from "../types/product.types";

const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await response.json();
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: Product = await response.json();
  return data;
};
