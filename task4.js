// Array of car objects
const cars = [
  { make: "Toyota", model: "toto", year: 2010 },
  { make: "Toyota2", model: "toto2", year: 2004 },
  { make: "Honda", model: "hd", year: 2008 },
  { make: "BMW", model: "BMW", year: 2015 },
  { make: "CARS", model: "CAR", year: 2012 },
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
