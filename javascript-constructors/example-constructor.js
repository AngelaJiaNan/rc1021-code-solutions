function ExampleConstructor() {}
console.log('value of prototype:', ExampleConstructor);
console.log('typeof prototype:', typeof ExampleConstructor);

var ExampleConstructor1 = new ExampleConstructor('matt');

console.log(ExampleConstructor1 instanceof ExampleConstructor);
