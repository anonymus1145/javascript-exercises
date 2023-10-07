const fibonacci = function (number) {
    if (number < 0) {
        return "OOPS";
    } else {
        let fibSeq = [0, 1];

        for (let i = 2; i <= number; i++) {
            fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
        }
        let fibNum = fibSeq.slice(0, number + 1);

        let finalNum = fibNum.pop();

        return finalNum;
    }
}

// Do not edit below this line
module.exports = fibonacci;