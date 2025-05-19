import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Cart from "./pages/Cart.tsx";
import Home from "./pages/Home.tsx";
import "@fontsource/inter/index.css";
import Layout from "./pages/Layout.tsx";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <Toaster position='top-center' toastOptions={{ duration: 2000 }} />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
