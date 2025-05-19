import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { toast } from "react-hot-toast";

export type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("CartContext not found");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    let added = false;
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      added = true;
      return [...prev, { ...product, quantity: 1 }];
    });
    if (added) {
      toast.success("Added to cart!");
    }
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const removed = prev.find((item) => item.id === productId);
      if (removed) toast("Removed from cart", { icon: "🗑️" });
      return prev.filter((item) => item.id !== productId);
    });
  };

  const increment = (productId: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (productId: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    toast("Cart cleared", { icon: "🧹" });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
