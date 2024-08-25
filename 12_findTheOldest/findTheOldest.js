const getAge = function (person) {
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  const ordered = people.sort((a, b) => (getAge(a) > getAge(b) ? 1 : -1));

  const biggest = ordered[2];
  return biggest;
};

// const findTheOldest = function (people) {
//   const ordered = people.sort((a, b) =>
//     a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? 1 : -1
//   );

//   const biggest = ordered[2];
//   return biggest;
// };

// Do not edit below this line
module.exports = findTheOldest;
