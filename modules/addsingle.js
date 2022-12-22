import readInput from './readinput.js';
import { addToPage, collection } from './addtopage.js';

const addSingle = () => {
  const singleBook = readInput();
  if (singleBook !== false && singleBook !== null) {
    collection.addBook(singleBook);
    addToPage(singleBook);
  }
};

export default addSingle;
