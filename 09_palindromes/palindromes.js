const palindromes = function (string) {
    let foundPalindrome = false;
    // ignore white space, punctuation when comparing.
    let modifiedString = string.toLowerCase().replace(/\W/g, '');
    let reverseModifiedString = '';

    for (let i = modifiedString.length-1; i >= 0; i--){
        reverseModifiedString += modifiedString[i];
    }
    console.log(reverseModifiedString);
    if (modifiedString == reverseModifiedString){
        foundPalindrome = true;
    }

    return foundPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
