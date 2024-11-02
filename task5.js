function findAndModify(array, name, newAge) {
  const updatedArray = array.map((person) => {
    if (person.name === name) {
      return { ...person, age: newAge };
    }
    return person;
  });

  console.log(updatedArray);
  return updatedArray;
}

const people = [
  { name: "Ali", age: 25 },
  { name: "khan", age: 30 },
  { name: "kuddus", age: 35 },
];

findAndModify(people, "kuddus", 44);
