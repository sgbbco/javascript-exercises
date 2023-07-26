const findTheOldest = function(array) {
 
  // This getAge function will help calculate the age given year of birth and death
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear(); // if death is undefined, use current year
    }
    return death - birth; // else calculate the age
  };

  // Using reduce feature to compare age of each person with current oldest
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); // calculate age of current oldest person
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath); // calculate age of person being checked
    return oldestAge < currentAge ? currentPerson : oldest; // if age of currentPerson is greater, it becomes new oldest, else return oldest
  });
};

// Do not edit below this line
module.exports = findTheOldest;
