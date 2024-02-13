// Function to update the displayed counts
function updateCounts() {
    const booksSwappedCount = localStorage.getItem('booksSwappedCount') || 0;
    const wishlistCount = localStorage.getItem('wishlistCount') || 0;

    document.getElementById('booksSwappedCount').textContent = booksSwappedCount;
    document.getElementById('wishlistCount').textContent = wishlistCount;
}

// Function to increment the "Books Swapped" count
function addSwap() {
    let currentCount = parseInt(localStorage.getItem('booksSwappedCount') || 0);
    localStorage.setItem('booksSwappedCount', currentCount + 1);
    updateCounts();
}

// Function to increment the "Wishlist" count
function addWishlist() {
    let currentCount = parseInt(localStorage.getItem('wishlistCount') || 0);
    localStorage.setItem('wishlistCount', currentCount + 1);
    updateCounts();
}

// Initialize the counts on page load
document.addEventListener("DOMContentLoaded", updateCounts);

// The following placeholder functions would be called when the respective actions occur:
// addSwap() - when a user swaps a book
// addWishlist() - when a user adds a book to their wishlist

// For example usage in your HTML:
// <button onclick="addSwap()">Swap a Book</button>
// <button onclick="addWishlist()">Add to Wishlist</button>
