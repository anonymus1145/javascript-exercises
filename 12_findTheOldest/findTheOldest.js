const findTheOldest = function (array) {
    let age = 0;
    let objAges = [];
    let person;

    for (let item of array)
        if (item.yearOfBirth < item.yearOfDeath) {
            age = item.yearOfDeath - item.yearOfBirth;
            objAges.push(age);
        } else if (item.yearOfDeath == null) {
            age = 2023 - item.yearOfBirth;
            objAges.push(age);
        }
    for (let i = 0; i < objAges.length; i++) {
        if (objAges[i] > age) {
            age = objAges[i];
            person = array[i];
        }
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
