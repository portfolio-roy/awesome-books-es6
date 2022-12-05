import showSec from './modules/menu.js';
import emptyMessage from './modules/emptymsg.js';
import buildPage from './modules/buildpage.js';
import addSingle from './modules/addsingle.js';
import dateTime from './modules/date.js';

// Code for add button
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  addSingle();
  emptyMessage();
});

// menu
const itemList = document.getElementById('menu-item-list');
const itemForm = document.getElementById('menu-item-form');
const itemContact = document.getElementById('menu-item-contact');
const addBookLink = document.getElementById('add-book-link');

itemList.addEventListener('click', () => {
  showSec('list');
});
itemForm.addEventListener('click', () => {
  showSec('form');
});
addBookLink.addEventListener('click', () => {
  showSec('form');
});
itemContact.addEventListener('click', () => {
  showSec('contact');
});

// construct the collection ont the page using data from local storage
window.onload = () => {
  buildPage();
  emptyMessage();
  dateTime()
};
