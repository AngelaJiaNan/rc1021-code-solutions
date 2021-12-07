const takeAChance = require('./take-a-chance');
const returnPromise = takeAChance('angela');

returnPromise.then(resolve => {
  console.log(resolve);
});

returnPromise.catch(error => {
  console.error(error.message);
});
