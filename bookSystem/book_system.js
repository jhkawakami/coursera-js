let books = [];

function addBook() {
    // Retrieve name of book from bookName text field
    const bookName = document.getElementById('bookName').value;

    // Retrieve name of author from authorName text field
    const authorName = document.getElementById('authorName').value;

    // Retrieve book description from bookDescription text field
    const bookDescription = document.getElementById('bookDescription').value;

    // Retrieve number of page sfrom pagesNumber text field, as an Integer.
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    
    // If all fields are filled and pagesNumber != NaN, add it to list.
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        // Add new book object to Books array
        books.push(book);

        // Show Books in div
        showbooks();

        // Clear text fields
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    /* for all books, create the following string in HTML:
            Book number in the list
            Name of the book
            Name of the Author
            Description of the book
            Number of pages for the book
            Edit button to edit the book information
        Store in an array called books Div
        Then join all strings in the array and set it to the innerHTML of the 'books' div
    */
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    // Retrieve book to be edited
    const book = books[index];

    // Populate text fields with the book to be edited
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    // Remove the current book to be edited
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list in div
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}