const person = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 28, gender: "female" },
  { name: "David", age: 22, gender: "male" },
  { name: "Eve", age: 35, gender: "female" },
  { name: "Frank", age: 27, gender: "male" },
];

function getRemainingPeople(arr) {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}

const remainingPeople = getRemainingPeople(person);
console.log(remainingPeople);
