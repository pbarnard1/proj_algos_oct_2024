// Three ways to define a string

let str1 = "Hello there!";
let str2 = 'Hi in single quotes!';
let str3 = `Here is a string surrounded by the back-tick symbols`; // Found to the left of the "1" key

// Putting values into strings
let x = 100;
console.log(`The value of x is ${ x }`); // To put the value of a variable into a string, use the `` and use ${ }

console.log(str1.length); // Getting the number of characters in the string (the length)

// Combine (concatenate) strings
let myName = "Adrian";
let message = "My name is ";
console.log(message + myName); // One approach
console.log(message.concat(myName)); // Another approach - note that this will NOT permanently concatenate unless you save into a variable
console.log(message);

// Access characters (two approaches)
console.log(myName[0]);
console.log(myName.charAt(0));

// Pangram challenge (https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true)
// Adrian's approach with an object (hash map) that keeps track of how many times each letter is found
function pangrams(s) {
    // Hash map (or object) holding each letter's frequency
    let letterFreqObj = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0,
    };
    // Convert the input string to lower case first
    let stringInLowerCase = s.toLowerCase();
    // Now go through each character and increment its frequency (if it's a letter) accordingly
    for (let k = 0; k < stringInLowerCase.length; k++) {
        const curChar = stringInLowerCase[k];
        if (curChar in letterFreqObj) { // If this is a letter  
            letterFreqObj[curChar]++; // Add 1 to its frequency
        }
    }
    // Loop through the frequency object, one letter at a time
    for (const currentLetter in letterFreqObj) {
        if (letterFreqObj[currentLetter] == 0) { // If a letter doesn't appear (i.e. has a frequency of 0)
            return "not pangram";
        }
    }
    return "pangram";
}

// Antonio's approach (thank you for sharing!!)
function pangram(s) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const lowercase = s.toLowerCase(); // Convert original string to lower case
    for (let l of alpha) { // Go through each letter
        if (!lowercase.includes(l)) { // If the lower-case string does NOT contain that letter
            return "not pangram";
        }
    }
    return "pangram";
}
console.log(pangram("The quick brown fox jumps over the lazy dog"));
console.log(pangram("Hello World"));

// Addendum: You might want to look into JavaScript sets, which keep track of unique values!  Sets cannot hold duplicates.