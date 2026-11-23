
let cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function updateCart() {
    if (!cartCount || !cartItems || !cartTotal) return;

    let totalItems = 0;
    let totalPrice = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.textContent = "Your cart is empty.";
    }

    cart.forEach((item, index) => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const div = document.createElement("div");
        div.className = "cart-item";

        const name = document.createElement("span");
        name.textContent =
            `${item.name} × ${item.quantity} — KSh ${item.price * item.quantity}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart();
        });

        div.append(name, removeButton);
        cartItems.appendChild(div);
    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toLocaleString("en-KE");
}

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingBook = cart.find(item => item.name === name);

        if (existingBook) {
            existingBook.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCart();

        button.textContent = "Added!";
        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 800);
    });
});

// Search books
const searchInput = document.getElementById("book-search");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();

        document.querySelectorAll(".product-card").forEach(card => {
            const bookName = card.textContent.toLowerCase();
            card.style.display = bookName.includes(searchText)
                ? ""
                : "none";
        });
    });
}

updateCart();
