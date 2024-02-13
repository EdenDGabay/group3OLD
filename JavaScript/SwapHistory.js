// Function to update the displayed counts
function updateCounts() {
    const booksSwappedCount = localStorage.getItem('booksSwappedCount') || 0;
    document.getElementById('booksSwappedCount').textContent = booksSwappedCount;
    // Similarly for wishlist count if needed
}

// Function to increment the "Books Swapped" count
function addSwap() {
    let currentCount = parseInt(localStorage.getItem('booksSwappedCount') || 0);
    localStorage.setItem('booksSwappedCount', currentCount + 1);
    updateCounts();
}

// Event listener to show the form
document.getElementById('addSwapButton').addEventListener('click', function() {
    document.getElementById('newSwapForm').style.display = 'block';
    // Disable the Swap Number field and automatically set the next swap number
    const nextSwapNumber = parseInt(localStorage.getItem('lastSwapNumber') || '0') + 1;
    document.getElementById('swapNumber').value = nextSwapNumber;
});

// Function to handle the new swap submission
function submitNewSwap() {
    const swapNumber = document.getElementById('swapNumber').value;
    const swapDate = document.getElementById('swapDate').value;
    const swappedWith = document.getElementById('swappedWith').value;
    const bookName = document.getElementById('bookName').value;

    // TODO: Validate the form fields

    // Save the new swap information in localStorage
    const newSwap = { swapNumber, swapDate, swappedWith, bookName };
    localStorage.setItem('lastSwapNumber', swapNumber);
    localStorage.setItem('swap' + swapNumber, JSON.stringify(newSwap));

    // Increment the swap count
    addSwap();

    // Reset the form fields and hide the form
    document.getElementById('newSwapForm').style.display = 'none';
    document.getElementById('newSwapForm').reset();

    // Reload the page to show the updated swap history
    location.reload();
}

// Call updateCounts on page load to set the initial values
document.addEventListener("DOMContentLoaded", updateCounts);
