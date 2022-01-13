const findTheOldest = function(people) {
let oldestPerson;
let oldestAge = 0;
let currentYear = 2022;

for(person of people){
    let age = 0;
    if (person.yearOfDeath != undefined){
        age = (person.yearOfDeath - person.yearOfBirth);
    } else {
        age = (currentYear - person.yearOfBirth);
    }
    if (age > oldestAge){
        oldestPerson = person;
        oldestAge = age;
    }
}
return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
