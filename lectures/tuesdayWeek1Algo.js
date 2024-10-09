function valuesGreaterThanSecondItem(inputArr) {
    if (inputArr.length < 2) { // EDGE CASE: Array is empty or only has one item
        console.log(0);
        return [];
    }
    let newArr = []; // Hold ONLY the values bigger than the second value in the original array
    for (let k = 0; k < inputArr.length; k++) { // Loop through the items in the original array
        if (inputArr[k] > inputArr[1]) { // Compare values
            newArr.push(inputArr[k]); // If this value is bigger than the second, add to the new array
        }
    }
    console.log(newArr.length);
    return newArr;
}

let test1 = [3, 1, 10];
let test2 = [4, 7, 3];
let test3 = [5];
let test4 = [];

console.log(valuesGreaterThanSecondItem(test1));
console.log(valuesGreaterThanSecondItem(test2));
console.log(valuesGreaterThanSecondItem(test3));
console.log(valuesGreaterThanSecondItem(test4));