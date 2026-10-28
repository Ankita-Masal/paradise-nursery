import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

function CartItem({ onNavigate }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total cost of one plant line (unit price x quantity)
  const calculateItemTotal = (item) => item.cost * item.quantity;

  // Total amount for all plants in the cart
  const calculateTotalAmount = () =>
    items.reduce((total, item) => total + calculateItemTotal(item), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // quantity would reach 0, so remove the item
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <div className="cart-total">Total Cart Amount: ${calculateTotalAmount()}</div>

        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit price: ${item.cost}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <p><strong>Total: ${calculateItemTotal(item)}</strong></p>
              </div>
              <button className="delete-button" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          ))
        )}

        <div className="cart-actions">
          <button className="continue-button" onClick={() => onNavigate('plants')}>
            Continue Shopping
          </button>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
