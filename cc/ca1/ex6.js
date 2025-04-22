var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.read = function () {
        console.log("The is book is read to read");
    };
    Book.prototype.write = function () {
        console.log("The book is read to be written");
    };
    return Book;
}());
var book = new Book();
book.read();
book.write();
