let cart = {};

function showPage(page) {
    const content = document.getElementById('content');
    if (page === 'index') {
        content.innerHTML = `
            <header>
                <h1>Welcome to Paradise Nursery</h1>
                <button onclick="showPage('products')">Shop Now</button>
            </header>`;
    } else if (page === 'products') {
        content.innerHTML = `
            <header>
                <h1>Our Plants</h1>
            </header>
            <section>
                <h2>Aromatic Plants</h2>
                <div class="product-card" data-id="1">
                    <img src="la.jpg" alt="Lavender">
                    <h3>Lavender</h3>
                    <p>Fragrant and beautiful.</p>
                    <p>$5.00</p>
                    <button onclick="addToCart(1, 'Lavender', 5.00)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="2">
                    <img src="rose.jpg" alt="Rose">
                    <h3>Rose</h3>
                    <p>Classic floral scent.</p>
                    <p>$4.00</p>
                    <button onclick="addToCart(2, 'Rose', 4.00)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="3">
                    <img src="mint.jpg" alt="Mint">
                    <h3>Mint</h3>
                    <p>Refreshing aroma.</p>
                    <p>$3.00</p>
                    <button onclick="addToCart(3, 'Mint', 3.00)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="4">
                    <img src="basil.jpg" alt="Basil">
                    <h3>Basil</h3>
                    <p>Herb with a sweet scent.</p>
                    <p>$2.50</p>
                    <button onclick="addToCart(4, 'Basil', 2.50)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="5">
                    <img src="sage.jpg" alt="Sage">
                    <h3>Sage</h3>
                    <p>Earthy and aromatic.</p>
                    <p>$3.50</p>
                    <button onclick="addToCart(5, 'Sage', 3.50)">Add to Cart</button>
                </div>
            </section>
            <section>
                <h2>Medicinal Plants</h2>
                <div class="product-card" data-id="6">
                    <img src="aleo.jpg" alt="Aloe Vera">
                    <h3>Aloe Vera</h3>
                    <p>Known for its healing properties.</p>
                    <p>$7.00</p>
                    <button onclick="addToCart(6, 'Aloe Vera', 7.00)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="7">
                    <img src="ginger.jpg" alt="Ginger">
                    <h3>Ginger</h3>
                    <p>Great for digestion.</p>
                    <p>$6.00</p>
                    <button onclick="addToCart(7, 'Ginger', 6.00)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="8">
                    <img src="turmeric.jpg" alt="Turmeric">
                    <h3>Turmeric</h3>
                    <p>Anti-inflammatory properties.</p>
                    <p>$5.50</p>
                    <button onclick="addToCart(8, 'Turmeric', 5.50)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="9">
                    <img src="chamomile.jpg" alt="Chamomile">
                    <h3>Chamomile</h3>
                    <p>Calming and soothing.</p>
                    <p>$4.50</p>
                    <button onclick="addToCart(9, 'Chamomile', 4.50)">Add to Cart</button>
                </div>
                <div class="product-card" data-id="10">
                    <img src="peppermint.jpg" alt="Peppermint">
                    <h3>Peppermint</h3>
                    <p>Refreshing and therapeutic.</p>
                    <p>$5.00</p>
                    <button onclick="addToCart(10, 'Peppermint', 5.00)">Add to Cart</button>
                </div>
            </section>`;
    } else if (page === 'cart') {
        displayCartItems();
    }
    updateCartCount();
}

function addToCart(id, name, price) {
    if (!cart[id]) {
        cart[id] = { name, price, quantity: 0 };
    }
    cart[id].quantity++;
    updateCartCount();
}

function updateCartCount() {
    const cartCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function displayCartItems() {
    const content = document.getElementById('content');
    let cartItemsHTML = '<header><h1>Your Shopping Cart</h1></header><section id="cart-items">';
    for (const id in cart) {
        const item = cart[id];
        cartItemsHTML += `
            <div class="product-card">
                <h3>${item.name}</h3>
                <p>Unit Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: <button onclick="updateQuantity(${id}, -1)">-</button> ${item.quantity} <button onclick="updateQuantity(${id}, 1)">+</button></p>
                <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeItem(${id})">Delete</button>
            </div>`;
    }
    cartItemsHTML += '</section><div><button onclick="checkout()">Checkout</button><button onclick="showPage(\'products\')">Continue Shopping</button></div>';
    content.innerHTML = cartItemsHTML;
}

function updateQuantity(id, change) {
    if (cart[id]) {
        cart[id].quantity += change;
        if (cart[id].quantity <= 0) delete cart[id];
        updateCartCount();
        displayCartItems();
    }
}

function removeItem(id) {
    delete cart[id];
    updateCartCount();
    displayCartItems();
}

function checkout() {
    alert('Coming soon!');
}

// Load initial page
showPage('index');