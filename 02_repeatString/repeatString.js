const repeatString = function (strarguent, numargument) {

    let streturn = "";

    if (numargument < 0) {
        return "ERROR";
    }

    for (let i = 0; i < numargument; i++) {
        streturn += strarguent;
    }
    return streturn;
};

// Do not edit below this line
module.exports = repeatString;
