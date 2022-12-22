export default class Collection {
  //  1. a constructor for book data
  constructor() {
    // create an array of BookInfos
    this.bookData = [];
  }

  //  a function to add books
  addBook = (singleBook) => {
    // push BookInfo to bookData
    this.bookData.push(singleBook);
    // save it to localStorage
    localStorage.setItem('Library', JSON.stringify(this.bookData));
  };

  deleteBook = (bookId) => {
    this.bookData = this.bookData.filter(
      (bookObject) => bookObject.bookId !== bookId,
    );
    localStorage.setItem('Library', JSON.stringify(this.bookData));
  };
}
