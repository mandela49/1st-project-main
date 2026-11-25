
// =====================================
// BOOKNEST AUTOMATIC SEARCH
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("book-search");

    // Check whether the page has a search bar
    if (!searchInput) {
        return;
    }

    // Find all category cards and book cards
    const cards = document.querySelectorAll(
        ".category-card, .product-card"
    );

    // Search automatically as the user types
    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value
            .trim()
            .toLowerCase();

        cards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});
