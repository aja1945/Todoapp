import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
};

export default ShoppingCart;