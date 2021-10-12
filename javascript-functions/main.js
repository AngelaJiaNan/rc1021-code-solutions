function convertMinutesToSeonds(minutes) {
  return minutes * 60;
}

var result = convertMinutesToSeonds(5);
console.log(result);

function greet(name) {
  return 'hey' + name;
}

var greeting = greet('Angela');
console.log(greeting);

function getArea(width, height) {
  return width * height;
}

var areaResult = getArea(17, 42);
console.log(areaResult);

function getFirstName(person) {
  return person.firstName;
}

var personFirstname = getFirstName({ firstName: 'Lelouche', lastName: 'Math' });
console.log(personFirstname);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(lastElement);
