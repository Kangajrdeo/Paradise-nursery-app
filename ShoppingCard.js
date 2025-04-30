
import React from 'react';
import Header from './Header';

const ShoppingCart = ({ cartItems, updateQuantity, removeItem }) => {
    const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <Header cartCount={cartItems.length} />
            <h2>Your Shopping Cart</h2>
            <div className="cart-summary">
                <p>Total Items: {cartItems.length}</p>
                <p>Total Cost: ${totalCost.toFixed(2)}</p>
            </div>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <div>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <button>Checkout</button>
            <button onClick={() => window.location.href='/products'}>Continue Shopping</button>
        </div>
    );
};

export default ShoppingCart;