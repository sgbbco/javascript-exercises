const books = [
  {
    title: 'Book1',
    author: 'Name1'
  },
  {
    title: 'Book2',
    author: 'Name2'
  },
  {
    title: 'Book3',
    author: 'Name3'
  },
  {
    title: 'Book4',
    author: 'Name4'
  }
]

const getTheTitles = function(bookArray) {
  return bookArray.map(book => book.title);
};

let titles = getTheTitles(books);

console.log(titles);

// Do not edit below this line
module.exports = getTheTitles;

