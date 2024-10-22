/* Reverse Vowels challenge - https://leetcode.com/problems/reverse-vowels-of-a-string/description/ */

var reverseVowels = function(s) {
    const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]); // Set that holds each vowel uniquely (with case sensitivity considered)
    let leftPtr = 0, rightPtr = s.length - 1; // Starting pointers for the two-pointer technique
    let charArr = s.split(''); // Split into its own individual characters and use an array
    let isMovingLeftPtr = true; // false means we're moving the right pointer, true means we're moving the left pointer
    while (leftPtr < rightPtr) { // While the left pointer is still to the left of the right pointer
        // console.log(leftPtr, rightPtr);
        if (isMovingLeftPtr) { // Moving the left pointer
            while (leftPtr < rightPtr && !vowelSet.has(charArr[leftPtr])) { // While we can move the left pointer AND we haven't found a vowel yet
                // console.log("in inner while loop for left pointer")
                // console.log(!(charArr[leftPtr] in vowelSet));
                // console.log(leftPtr,rightPtr)
                leftPtr++;
            }
            // console.log("After inner while loop for left pointer")
            isMovingLeftPtr = false;
        } else { // Moving the right pointer
            while (leftPtr < rightPtr && !vowelSet.has(charArr[rightPtr])) { // While we can move the right pointer AND we haven't found a vowel yet
                // console.log("in inner while loop for right pointer")
                // console.log(!(charArr[rightPtr] in vowelSet));
                // console.log(leftPtr,rightPtr)
                rightPtr--;
            }
            // console.log("After inner while loop for right pointer")
            // Swap - note we swap after we finish moving the right pointer, but only
            // if the left pointer is still to the left of the right pointer
            if (leftPtr < rightPtr) {
                [charArr[leftPtr], charArr[rightPtr]] = [charArr[rightPtr], charArr[leftPtr]]; // Swap (note the [] on each side)
                leftPtr++; // IMPORTANT: we must move both pointers since we're done with both vowels here
                rightPtr--;
                // console.log(charArr);
            }
            isMovingLeftPtr = true;
        }
    }
    return charArr.join(''); // Take the array and combine the characters back
};
// Various test cases - including some custom ones
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("a"));
console.log(reverseVowels("m"));
console.log(reverseVowels("Adriana"));
console.log(reverseVowels("creaminess"));