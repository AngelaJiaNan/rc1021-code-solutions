console.log('maximumValue:', Math.max(5, 10, 20));

var heroes = ['batman', 'spiderman', 'superman', 'ironman'];

var randomNumber = Math.random();
console.log(Math.random());

randomNumber = randomNumber * heroes.length;
console.log(randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Dog lovers',
    author: 'John White'
  },
  {
    title: 'CSS cheatsheet',
    author: 'Dr. Matt'
  },
  {
    title: 'JavaScript for Dummies',
    author: 'Walter Java'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var fristBook = library.shift();
console.log('fristBook:', fristBook);

var js = {
  title: 'JavaScript for Impatient Programmer',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Angela Nan';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
