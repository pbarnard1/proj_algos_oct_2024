// Gemstones challenge: https://www.hackerrank.com/challenges/gem-stones/problem?isFullScreen=true

function gemstones(arr) {
    let gemstones = 0; // Number of gemstones found in each string
    let lettersInFirstString = {}; // Hold each unique letter in the first string
    // Find each character in the first string, then add it to the object defined up above
    for (let curChar of arr[0]) {
        lettersInFirstString[curChar] = true;
        // console.log(curChar);
    }
    // console.log(lettersInFirstString);
    // Loop through each character in the first string
    for (let curChar in lettersInFirstString) {
        let isFoundInAllStrings = true; // Assume for now that the current letter appears in all strings
        // Look at the OTHER strings and check to see whether the current letter can be found
        for (let k = 1; k < arr.length; k++) {
            // If the current letter is NOT in this string, there's no need to check the others, so end early
            if (!arr[k].includes(curChar)) {
                isFoundInAllStrings = false;
                break;
            }
        }
        // If we found the letter in all strings, it's a gemstone, so increment the count accordingly
        if (isFoundInAllStrings) {
            gemstones++;
        }
    }
    return gemstones;
}