// Function to update the displayed counts
function updateCounts() {
    const booksSwapped = JSON.parse(localStorage.getItem('booksSwapped')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const booksSwappedCount = booksSwapped.length;
    const wishlistCount = wishlist.length;

    document.getElementById('booksSwappedCount').textContent = booksSwappedCount;
    document.getElementById('wishlistCount').textContent = wishlistCount;
}

// Function to increment the "Books Swapped" count
function addSwap() {
    let booksSwapped = JSON.parse(localStorage.getItem('booksSwapped')) || [];
    // Logic to add a book to the swapped books array
    // For example:
    // booksSwapped.push(book);
    localStorage.setItem('booksSwapped', JSON.stringify(booksSwapped));
    updateCounts();
}

// Function to increment the "Wishlist" count
function addWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    // Logic to add a book to the wishlist array
    // For example:
    // wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateCounts();
}

// Initialize the counts on page load
document.addEventListener("DOMContentLoaded", updateCounts);
