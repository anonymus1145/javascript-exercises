const sumAll = function(firstInt, secondInt) {

    let sum = 0;

    if (Number.isInteger(firstInt) == false || Number.isInteger(secondInt) == false) {
        return "ERROR";
    } else if (firstInt < 0 || secondInt < 0) {
        return "ERROR";
    } else if (firstInt < secondInt) {
        for (let i = firstInt; i <= secondInt; i++) {
            sum += i;
        }
    } else {
        for (let i = secondInt; i <= firstInt; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;