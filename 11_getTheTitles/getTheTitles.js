const getTheTitles = function (book) {
  const title = books.map((book) => book.title);
  return title;
};

const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
];
// Do not edit below this line
module.exports = getTheTitles;
