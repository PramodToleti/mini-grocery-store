import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartContainer.styles.css";

const CartContainer: React.FC = () => {
  const { cart, increment, decrement, removeFromCart, total, clearCart } =
    useCartContext();

  if (cart.length === 0) {
    return (
      <div className='cart-empty'>
        <h2>Your cart is empty 🛒</h2>
        <p>Go add some products!</p>
      </div>
    );
  }

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      <div className='cart-list'>
        {cart.map((item) => (
          <div className='cart-item' key={item.id}>
            <img src={item.image} alt={item.name} className='cart-item-img' />
            <div className='cart-item-details'>
              <div className='cart-item-title'>{item.name}</div>
              <div className='cart-item-category'>{item.category}</div>
              <div className='cart-item-price'>${item.price.toFixed(2)}</div>
            </div>
            <div className='cart-item-qty'>
              <button
                onClick={() => decrement(item.id)}
                aria-label='Decrease quantity'
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increment(item.id)}
                aria-label='Increase quantity'
              >
                +
              </button>
            </div>
            <div className='cart-item-total'>
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className='cart-item-remove'
              onClick={() => removeFromCart(item.id)}
              aria-label='Remove item'
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className='cart-summary'>
        <div>
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
        <button className='cart-clear-btn' onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
