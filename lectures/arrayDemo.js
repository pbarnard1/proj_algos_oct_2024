/* Basics of arrays (refresher) */

let numArr = [10, 30, 20, -5, 18, 25];
let mixedArr = ["Adrian", true, 50, 3.18, [1, 8]];

console.log(numArr.length);
console.log(numArr.push(50)); // Add the value 50 to the end of the array
console.log(numArr.pop()); // Removes the last value from the array and returns it

// Access the third value in each array
console.log(numArr[2]);
console.log(mixedArr[2]);

// Looping through an array in its entirety
console.log("Looping through the number array");
for (let k = 0; k < numArr.length; k++) { // k represents the index for this array, k = 0, k = 1, ... k = numArr.length - 1
    console.log(numArr[k]);
}

console.log("Looping through the second array");
for (let k = 0; k < mixedArr.length; k++) { // k represents the index for this array, k = 0, k = 1, ... k = mixedArr.length - 1
    console.log(mixedArr[k]);
}
// Note the value at index 4 in the mixed array!

/*
Skyline Heights
Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
Let’s say you are given an array with heights of consecutive buildings, 
starting closest to you and extending away. Array [-1,7,3] would represent 
three buildings: first is actually out of view below street level, 
behind it is second at 7 stories high, third is 3 stories high 
(hidden behind the 7-story). You are situated at street level. Return array 
containing heights of buildings you can see, in order. Given [-1,1,1,7,3] 
return [1,7]. Given [0,4] return [4]. As always with challenges, do not use 
built-in array functions such as unshift().
*/
function viewHeights(inputArr) {
    let viewableHeights = []; // Hold the buildings that we can see
    let tallestBuilding = 0; // We will NOT count any buildings with a negative height or a height of 0
    // Loop through our buildings
    for (let k = 0; k < inputArr.length; k++) {
        // If the current building (inputArr[k]) is taller than the tallest building we've found so far
        if (inputArr[k] > tallestBuilding) {
            viewableHeights.push(inputArr[k]); // Saves this building because we can see (tallest one so far)
            tallestBuilding = inputArr[k]; // Make this the new maximum height
        }
    }
    return viewableHeights;
}
console.log("Testing the heights problem:");
console.log(viewHeights([-1, 1, 1, 7, 3]));
console.log(viewHeights([1,3,5,8,10])); // All heights are increasing (not shown in lecture)
console.log(viewHeights([5, 3, 2, 2, 1]));
console.log(viewHeights([])); // No buildings
console.log(viewHeights([10])); // Only one building, above street level
console.log(viewHeights([-3])); // Buildings are ALL below street level