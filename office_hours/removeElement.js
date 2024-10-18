// Remove Element challenge from LeetCode: https://leetcode.com/problems/remove-element/

/** JSDoc comment (feel free to do some research!)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// Thank you Antonio and everyone else for helping build this function using the two-pointer method!!
var removeElement = function(nums, val) {
    // define first pointer
    let writePointer = 0;
    let sum = 0;
    // Loop through the array with second pointer
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== val) {
            nums[writePointer] = nums[readPointer]
            writePointer++;
            sum++
        }
    }
    return sum;
};