class Book {
    constructor(author, title, pages) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.currentPage = 1; // Starting page for the book
    }
    // Methods (abilities) for this book to perform
    readBook(numberOfPagesToRead) {
        this.currentPage += numberOfPagesToRead;
    }
}
// Building an instance of a book - and grabbing attributes
let myBook = new Book("Michael Crichton","Jurassic Park", 500);
console.log(myBook.author);
console.log(myBook.createdAt);
// Calling on a method
myBook.readBook(40);
console.log(myBook.currentPage);