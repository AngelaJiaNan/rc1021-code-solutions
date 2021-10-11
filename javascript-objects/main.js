var student = {
  firstName: 'Angela',
  lastName: 'Nan',
  Age: 28
};

var firstName = student.firstName;
var lastName = student.lastName;
var fullName = firstName + ' ' + lastName;
console.log('value of fulName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'BCBA';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'fit',
  year: 2010
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle.color);
console.log('value of vehicle["isConvertible"]:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Chewbacca',
  type: 'goldendoodle'
};

delete pet.name;

delete pet.type;

console.log('value of the pet:', pet);
