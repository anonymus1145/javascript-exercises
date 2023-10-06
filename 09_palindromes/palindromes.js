const palindromes = function (word) {

    const valueToRemove = ['!', '.', ',','?',' '];
    let arr = word.split('');
    let newWord = '';

    for (let i = 0; i < valueToRemove.length; i++) {
       arr = arr.filter((char) => char !== valueToRemove[i]);
    }

    newWord = arr.join('');
    let arr2 = arr.reverse();
    let arr3 = arr2.join('');
    if (newWord.toLowerCase() === arr3.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
