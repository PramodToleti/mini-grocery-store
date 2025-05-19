import { useState } from "react";
import { PRODUCTS as initialProducts } from "../../constants/products";
import type { Product } from "../../types/Product";

export const useHomeContainer = () => {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);

  const handleFilterChange = (filteredProducts: Product[]) => {
    setFilteredProducts(filteredProducts);
  };

  return {
    allProducts: initialProducts,
    filteredProducts,
    handleFilterChange,
  };
};
