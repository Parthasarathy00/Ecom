document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("product-list");

    // Sample Product Data
    const products = [
        { id: 1, name: "Product 1", price: 20, image: "images/product1.jpg" },
        { id: 2, name: "Product 2", price: 35, image: "images/product2.jpg" },
    ];

    // Display Products
    if (productsContainer) {
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }
});

// Cart Functionality
let cart = [];

function addToCart(productId) {
    alert("Product added to cart!");
}
