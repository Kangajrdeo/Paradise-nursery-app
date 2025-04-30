
import React, { useState } from 'react';
import Header from './Header';

const ProductListing = ({ addToCart }) => {
    const [plants] = useState([
        { id: 1, name: 'Fiddle Leaf Fig', price: 45, img: 'path/to/image1' },
        { id: 2, name: 'Snake Plant', price: 30, img: 'path/to/image2' },
        { id: 3, name: 'Pothos', price: 25, img: 'path/to/image3' },
        // Add more plants...
    ]);

    return (
        <div>
            <Header cartCount={0} />
            <h2>Available Plants</h2>
            <div className="product-list">
                {plants.map(plant => (
                    <div key={plant.id} className="product-card">
                        <img src={plant.img} alt={plant.name} />
                        <h3>{plant.name}</h3>
                        <p>${plant.price}</p>
                        <button onClick={() => addToCart(plant)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;