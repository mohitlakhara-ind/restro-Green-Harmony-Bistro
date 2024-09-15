let cart = [];
let total = 0;

const cartItemsContainer = document.getElementById('cart-items');
const totalPriceContainer = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.parentElement.querySelector('h3').textContent;
        const itemPrice = parseFloat(button.parentElement.querySelector('p').textContent.replace('$', ''));

        cart.push({ name: itemName, price: itemPrice });
        total += itemPrice;
        updateCart();
    });
});

function updateCart() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
    });
    totalPriceContainer.textContent = `Total: $${total.toFixed(2)}`;
}
