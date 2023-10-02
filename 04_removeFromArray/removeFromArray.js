const removeFromArray = function (myArray, ...extras) {

    let elements = [];

    for (let y = 0; y < myArray.length; y++) {

        elements.push(myArray[y])

        for (let i = 0; i < extras.length; i++) {
            if (extras[i] === myArray[y]) {
                elements.pop(extras[i])
            }
        }
    }
    return elements;
};

// Do not edit below this line
module.exports = removeFromArray;