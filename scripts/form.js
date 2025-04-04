// Product array
const products = [
    { id: "prod001", name: "Ultra HD Smart TV" },
    { id: "prod002", name: "Wireless Noise-Canceling Headphones" },
    { id: "prod003", name: "Smartphone Pro Max" },
    { id: "prod004", name: "Laptop Extreme Edition" },
    { id: "prod005", name: "Smart Home Hub" }
];

// When DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate product select options
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});