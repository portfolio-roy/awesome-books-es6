import { collection, addToPage } from "./addtopage.js";
const buildPage = () => {
    collection.bookData = JSON.parse(localStorage.getItem('Library' || '[]'));
    if (collection.bookData === null) {
      collection.bookData = [];
      return;
    }
  
    collection.bookData.forEach((singleBook) => addToPage(singleBook));
}

export default buildPage;