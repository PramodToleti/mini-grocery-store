import type { Product } from "../../types/Product";
import "./ProductsCatalog.styles.css";
import { useCartContext } from "../../context/CartContext";

const ProductsCatalog = ({ products }: { products: Product[] }) => {
  const { cart, addToCart } = useCartContext();

  return (
    <div className='products-container'>
      {products.map((product: Product) => {
        const inCart = cart.some((item) => item.id === product.id);
        return (
          <div key={product.id} className='product-card'>
            <div className='product-image-wrap'>
              <img
                src={product.image}
                alt={product.name}
                className='product-image'
              />
            </div>
            <div className='product-details'>
              <h3>{product.name}</h3>
              <div className='product-meta'>
                <span className='product-category'>{product.category}</span>
                <span className='product-price'>
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              type='button'
              className='cart-button'
              onClick={() => addToCart(product)}
              disabled={inCart}
            >
              {inCart ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCatalog;
