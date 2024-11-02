const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composedFunction = (num) => addFive(double(square(num)));

const result = composedFunction(5);
console.log(result);
