// Find the nth term of the Fibonacci sequence
/*
1st term: 1
2nd term: 1
3rd term: 1st + 2nd = 1 + 1 = 2
4th term: 2nd + 3rd = 1 + 2 = 3
5th term: 3rd + 4th = 2 + 3 = 5
6th term: 3 + 5 = 8
7th term: 5 + 8 = 13
8th term: 8 + 13 = 21
...
nth term: (n-2)th term + (n-1)th term (sum the last two terms)
*/

function fibonacci(n) {
    // Base cases (stop the recursion); n = 1 or 2
    if (n <= 2) {
        return 1;
    } else {
        // Recursive step (forward progress) - find the previous two terms and add them together
        return fibonacci(n-2) + fibonacci(n-1);
    }
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(8));
// console.log(fibonacci(9));
// console.log(fibonacci(50)); // Watch how long this takes!

function fibonacciWithMemo(n, savedCalculations = {}) {
    // Base cases (stop the recursion); n = 1 or 2
    if (n <= 2) {
        return 1;
    } else {
        let leftTerm;
        if ((n-1) in savedCalculations) { // If we've already calculated this previous term, just use that value
            leftTerm = savedCalculations[(n-1)];
        } else { // We need to recursively calculate this term
            leftTerm = fibonacciWithMemo(n-1,savedCalculations);
            savedCalculations[(n-1)] = leftTerm; // Save the calculation so we don't need to do it again
        }
        let rightTerm;
        if ((n-2) in savedCalculations) { // If we've already calculated this previous term, just use that value
            rightTerm = savedCalculations[(n-2)];
        } else { // We need to recursively calculate this term
            rightTerm = fibonacciWithMemo(n-2,savedCalculations);
            savedCalculations[(n-2)] = rightTerm; // Save the calculation so we don't need to do it again
        }
        // Return this sum
        return leftTerm + rightTerm;
    }
}

console.log(fibonacciWithMemo(1));
console.log(fibonacciWithMemo(2));
console.log(fibonacciWithMemo(8));
console.log(fibonacciWithMemo(9));
console.log(fibonacciWithMemo(50)); // MUCH faster now!
console.log(fibonacciWithMemo(1000));

// Telephone words challenge (Recursion To Do 4)
function telephoneWords(phoneNum) {
    let allWords = []; // Hold all the words we've built
    rTelephoneWords(phoneNum, allWords); // Recursively build them with helper function that does the recursion
    return allWords; // Return the array of words (notice that since arrays are mutable, its contents now hold the words!)
}

/* Recursive helper function with these memos:
index = position in the phone string (default starting index of 0)
builtStr = current string we're building, one character at a time (default of an empty string)
allResults = array holding all the words we've found so far (originally holds the empty array passed in)
*/
function rTelephoneWords(phoneNum, allResults = [], index = 0, builtStr = "") {
    if (index == phoneNum.length) { // If we're at the end of the word - base
        allResults.push(builtStr); // Push this string
        return; // Stop the function right then and there
    }
    let letterMap = {
        "2": ["A", "B", "C"],
        "3": ["D", "E", "F"],
        "4": ["G", "H", "I"],
        "5": ["J", "K", "L"],
        "6": ["M", "N", "O"],
        "7": ["P", "Q", "R", "S"],
        "8": ["T", "U", "V"],
        "9": ["W", "X", "Y", "Z"],
    }
    let currentPhoneCharacter = phoneNum[index];
    // Go through each combo for the current character (hopefully it's a digit) and build recursively
    if (currentPhoneCharacter in letterMap) { // 2 through 9
        for (let currentLetter of letterMap[currentPhoneCharacter]) {
            // console.log("Picking the letter "+currentLetter+" for index "+index);
            rTelephoneWords(phoneNum, allResults, index+1, builtStr + currentLetter); // Add to string and continue with recursion
        }
    } else if (currentPhoneCharacter === "1") { // 1
        rTelephoneWords(phoneNum, allResults, index+1, builtStr + "I"); // Add to string and continue with recursion
    } else if (currentPhoneCharacter === "0") { // 0
        rTelephoneWords(phoneNum, allResults, index+1, builtStr + "O"); // Add to string and continue with recursion
    } else { // If we get a hyphen or anything that's not a digit - keep going without adding any characters right now
        rTelephoneWords(phoneNum, allResults, index+1, builtStr); // No new characters added
    }
}
// Examples
console.log(telephoneWords("818-2612"));
console.log(telephoneWords("131"));