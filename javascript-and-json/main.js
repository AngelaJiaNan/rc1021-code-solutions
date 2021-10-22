var books = [
  {
    isbn: '1234-567-789',
    title: 'How to use Javascript',
    author: 'Dr. Axel'
  },
  {
    isbn: '567-345-879',
    title: 'What is JSON?',
    author: 'Dr. Matt'
  },
  {
    isbn: '978-567-235',
    title: 'How to use Seialization',
    author: 'Dr. John'
  }
];

console.log(books);
console.log('typeof books:', typeof books);

var booksJ = JSON.stringify(books);

console.log(booksJ);
console.log(typeof booksJ);

var studentJ = '{"id":565, "name": "Angela"}';
console.log(studentJ);
console.log(typeof studentJ);

var student = JSON.parse(studentJ);

console.log(student);
console.log(typeof student);
