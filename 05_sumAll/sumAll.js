const sumAll = function(firstInt, secondInt) {
    //const count = [];
    let sum = 0;

    if (Number.isInteger(firstInt) == false || Number.isInteger(secondInt) == false) {
        return "ERROR";
    } else if (firstInt < 0 || secondInt < 0) {
        return "ERROR";
    } else if (firstInt < secondInt) {
        for (let i = firstInt; i <= secondInt; i++) {
            //count.push(i);
            sum += i;
        }
    } else {
        for (let i = secondInt; i <= firstInt; i++) {
            //count.push(i);
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

//let number = sumAll(1,100);
//console.log(number);
