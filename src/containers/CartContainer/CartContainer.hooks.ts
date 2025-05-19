import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";

type UseCartHook = {
  cartItems: Product[] | null;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const useCart = (): UseCartHook => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);

  return {
    cartItems,
    setCartItems,
  };
};
