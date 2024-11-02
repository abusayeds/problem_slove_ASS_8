// Array of book objects
const books = [
  { title: "title king", author: "king", year: 2000 },
  { title: "title gole", author: "life gole", year: 2001 },
  { title: "The Great ", author: "great", year: 2002 },
  { title: "The programing", author: "programing", year: 2003 },
];

function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

const titles = getBookTitles(books);
console.log(titles);
