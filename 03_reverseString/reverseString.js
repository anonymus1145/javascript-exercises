const reverseString = function(strToReverse) {
    let strReverse = "";
    const myArray = strToReverse.split("");

    for (let i = myArray.length - 1; i >= 0; i--) {
        strReverse += myArray[i];
    }
    return strReverse
};

// Do not edit below this line
module.exports = reverseString;
