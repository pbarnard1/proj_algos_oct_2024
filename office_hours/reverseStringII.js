// Reverse String II: https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    /* PART ONE: split original string into array */
    let splitStrArr = [];
    let curStr = ""; // Current string we will push into the array
    for (let i = 0; i < s.length; i++) {
        curStr += s[i]; // Add the current character
        if (curStr.length === k) { // If this string is k characters long...
            splitStrArr.push(curStr); // ...add to the array
            curStr = ""; // Reset the current string for the next one
        }
    }
    if (curStr !== "") { // Push the last string if it's not empty (in case it's less than k characters long)
        splitStrArr.push(curStr);
    }
    // console.log(splitStrArr);
    /* PART TWO: reverse ONLY the even-indexed strings */
    for (let curInd = 0; curInd < splitStrArr.length; curInd += 2) {
        let strInLoop = splitStrArr[curInd];
        // console.log(strInLoop);
        // Variable that will hold this reversed string
        let revStr = "";
        // Reverse the current string, starting at the last letter and moving towards the first letter
        for (let strInd = strInLoop.length - 1; strInd >= 0; strInd--) {
            revStr = revStr + strInLoop[strInd];
        }
        // console.log(revStr);
        splitStrArr[curInd] = revStr; // Save the reversed string in the array
    }
    // console.log(splitStrArr);
    /* PART THREE: combine these strings from the array (you can use the join method if you wish) */
    let finalStr = "";
    for (let ind = 0; ind < splitStrArr.length; ind++) {
        finalStr += splitStrArr[ind];
    }
    return finalStr;
};

console.log(reverseStr("abcdefghij",3));