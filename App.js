
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import './styles/App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (plant) => {
        const existingItem = cartItems.find(item => item.id === plant.id);
        if (existingItem) {
            setCartItems(cartItems.map(item => item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCartItems([...cartItems, { ...plant, quantity: 1 }]);
        }
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            removeItem(id);
        } else {
            setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
        }
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/products">
                    <ProductListing addToCart={addToCart} />
                </Route>
                <Route path="/cart">
                    <ShoppingCart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;