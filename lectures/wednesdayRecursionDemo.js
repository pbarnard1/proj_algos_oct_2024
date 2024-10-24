// Non-recursive countdown
function countdown(start = 10) {
    for (let k = start; k > 0; k--) {
        console.log(k);
    }
    console.log("Liftoff!");
}

// countdown();

// Recursive countdown
function rCountdown(start = 10) {
    if (start <= 0) { // Base case - when the recursion is over (in this case, the starting value is 0 or less)
        console.log("Liftoff!");
    } else { // Recursive step (forward progress)
        console.log(start);
        rCountdown(start - 1); // Function calls itself (notice how we're changing the value when we call the function!)
    }
}

rCountdown();

// Factorials
// 10! (read "10 factorial") = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// 9! = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// ...
// 5! = 5 * 4 * 3 * 2 * 1 = 5 * 4!
// 4! = 4 * 3 * 2 * 1 = 24 = 4 * 3!
// 3! = 3 * 2 * 1 = 6 = 3 * 2!
// 2! = 2 * 1 = 2
// 1! = 1 (by definition)
// 0! = 1 (by definition)

function rFactorial(n = 1) {
    if (n <= 1) {
        console.log("Base case reached - returning 1");
        return 1;
    } else {
        console.log("Multiplying "+ n + " by the result of " + (n -1) + " factorial (recursively)");
        let result = n * rFactorial(n-1);
        console.log(`${n} factorial equals ${result}`);
        return result;
    }
}

console.log(rFactorial(7));

let arr1 = [1, 8, 3, [1, 4, [5,3],[], [1, [8,4]]], 11, [15, 2]];
let arr2 = [[1, 8], [1, 3, [2, 7, 10]], 4, 8]; 
// Find the maximum value in a nested array recursively
function rFindMax(inputArr) {
    let maxVal = Number.MIN_VALUE; // Smallest realistic value in JS
    for (let k = 0; k < inputArr.length; k++) {
        if (Array.isArray(inputArr[k])) { // We deal with a nested array (check to see if we have a nested array - if so, then find the max recursively of the nested array)
            maxVal = Math.max(maxVal, rFindMax(inputArr[k])); // Recursively compare the nested array to the minimum value so far
        } else { // We deal with a plain number, so we can check without the need to do recursion in this case
            maxVal = Math.max(maxVal, inputArr[k]); 
        }
        // console.log(inputArr[k]);
    }
    return maxVal;
}
console.log(rFindMax(arr1));
console.log(rFindMax(arr2));
