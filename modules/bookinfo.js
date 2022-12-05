import genId from './genid.js';

export default class BookInfo {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookId = genId(8);
  }
}