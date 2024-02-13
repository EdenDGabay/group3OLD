function Book(title, author, category, description, imageSrc, altText) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.description = description;
    this.imageSrc = imageSrc;
    this.altText = altText;
}
document.addEventListener("DOMContentLoaded", function() {
    // Ensure exampleBook or the book object you want to use is defined above this script
    document.getElementById('bookImage').src = exampleBook.imageSrc;
    document.getElementById('bookImage').alt = exampleBook.altText;
    document.getElementById('bookTitle').textContent = exampleBook.title;
    document.getElementById('bookAuthor').textContent = exampleBook.author;
    document.getElementById('bookCategory').textContent = exampleBook.category;
    document.getElementById('bookDescription').textContent = exampleBook.description;
});


//Dugma Le Yetzirat Sefer
let exampleBook = new Book(
  "The Great Escape",
  "Paul Brickhill",
  "Adventure",
  "This book is known for its thrilling plot and suspenseful storyline. It keeps readers on the edge of their seats with unexpected twists and turns. A popular choice for those who enjoy a gripping reading experience. This thriller is also believed to have a number of thought-provoking themes, making it a great choice for book club discussions. Dive into the suspense and unravel the mystery.",
  src="../img/TheGreatEscapeCover.jpg",
  "Cover image of The Great Escape"
);

// Book array Example
let wishlistBooks = [
  // Will be filled with books when we create the DB.
];

function createBookHTML(book) {
  let bookDiv = document.createElement('div');
  bookDiv.className = 'book';

  let img = document.createElement('img');
  img.src = book.imageSrc;
  img.alt = book.altText;
  img.className = 'book-cover';

  let infoDiv = document.createElement('div');
  infoDiv.className = 'book-info';

  let titleH3 = document.createElement('h3');
  titleH3.className = 'book-title';
  titleH3.textContent = book.title;

  let authorP = document.createElement('p');
  authorP.className = 'book-author';
  authorP.textContent = book.author;

  infoDiv.appendChild(titleH3);
  infoDiv.appendChild(authorP);

  bookDiv.appendChild(img);
  bookDiv.appendChild(infoDiv);

  return bookDiv;
}

// Function to render all books on the wishlist
function renderWishlist() {
  let wishlistSection = document.getElementById('wishlist');
  wishlistBooks.forEach(function(book) {
    wishlistSection.appendChild(createBookHTML(book));
  });
}

document.addEventListener("DOMContentLoaded", renderWishlist);

// Example array of a user books he wants to swap
const swappableBooks = [
  {title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
  cover: "../img/RichDadPoorDadBook.jpg"},
  {title: "The Butterfly Effect",
    author: "Andy Andrews",
    cover: "../img/TheButterflyEffectBook.jpg"},
  {title: "Eragon",
    author: "Christopher Paolini",
    cover: "../img/EragonBook.jpg"}
];

// Function to create book item HTML
function createBookItem(book) {
    var div = document.createElement('div');
    div.className = 'book-item';

    var img = document.createElement('img');
    img.src = book.cover;
    img.alt = book.title;
    img.className = 'book-cover';

    var title = document.createElement('h4');
    title.className = 'book-title';
    title.textContent = book.title;

    var author = document.createElement('p');
    author.className = 'book-author';
    author.textContent = book.author;

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(author);

    return div;
}

// Function to render user's swappable books
function renderSwappableBooks() {
    var booksGrid = document.getElementById('booksToSwap');
    swappableBooks.forEach(function(book) {
        booksGrid.appendChild(createBookItem(book));
    });
}

// Call renderSwappableBooks on DOMContentLoaded after you define your swappableBooks array
document.addEventListener("DOMContentLoaded", renderSwappableBooks);
