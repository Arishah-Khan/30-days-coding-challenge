// Day 5
// Question no 1 (Array comparison and manipulation)
// Create a function in typescript that takes two arrays of numbers as input.The function should perform the following operation based on the conditions given:
// 1: if the lenghts of the both arrays are same and all element are the same.
// merge both array into one array. Multiple corrresponding elements of arrays to create a new array.
// 2: if the length of both arrays are different.
// merge boh array into one array. return the middle element of teh merged array.
// 3: if the length of the both arrays are the same but elements are different.
// make the elements of both arrays the same by adding corresponding elements. merge the arrays and add corresponding elements of the resulting array.
function mergeArrays(arr1, arr2) {
    // Function to find the middle value of a combined array
    function findMiddleValue(combineArr) {
        var middleIndex = Math.floor(combineArr.length / 2);
        return combineArr[middleIndex];
    }
    var sameLength = arr1.length === arr2.length;
    var allElementsSame = true;
    if (sameLength) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                allElementsSame = false;
                break;
            }
        }
    }
    // Case 1: If the lengths of both arrays are the same and all elements are the same
    if (sameLength && allElementsSame) {
        var mergedArray = [];
        for (var i = 0; i < arr1.length; i++) {
            mergedArray[i] = arr1[i] * arr2[i];
        }
        return mergedArray;
        // Case 2: If the lengths of both arrays are different
    }
    else if (!sameLength) {
        var mergedArray = [];
        var index = 0;
        // Add elements from the first array
        for (var i = 0; i < arr1.length; i++) {
            mergedArray[index++] = arr1[i];
        }
        // Add elements from the second array
        for (var i = 0; i < arr2.length; i++) {
            mergedArray[index++] = arr2[i];
        }
        // Ensure that the merged array has at least one element
        if (mergedArray.length > 0) {
            return findMiddleValue(mergedArray);
        }
        else {
            return 0; // Fallback if mergedArray is unexpectedly empty
        }
        // Case 3: If the lengths of both arrays are the same but elements are different
    }
    else if (sameLength && !allElementsSame) {
        var combinedArray = [];
        for (var i = 0; i < arr1.length; i++) {
            combinedArray[i] = arr1[i] + arr2[i];
        }
        return combinedArray;
    }
    // Ensure a return value in all cases
    return 0;
}
// Example usage:
// Case 1: Lengths are the same, and all elements are the same
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log("Case 1 Output (same length, same elements):", mergeArrays(arr1, arr2)); // Output: [1, 4, 9]
// Case 2: Lengths are different
var arr3 = [1, 2];
var arr4 = [3, 4, 5];
console.log("Case 2 Output (different lengths):", mergeArrays(arr3, arr4)); // Output: 3 (middle element of [1, 2, 3, 4, 5])
// Case 3: Lengths are the same but elements are different
var arr5 = [1, 2, 3];
var arr6 = [4, 5, 6];
console.log("Case 3 Output (same length, different elements):", mergeArrays(arr5, arr6)); // Output: [5, 7, 9]
// Question no 2 (Extract first letters from string array)
// Create a function in TypeScript that takes an array of strings(names) as input. The function should return a new array containing the first letter of each name.
function extractFirstLetters(names) {
    var firstLetters = [];
    for (var i = 0; i < names.length; i++) {
        if (names[i].length > 0) {
            firstLetters.push(names[i][0]);
        }
    }
    return firstLetters;
}
;
// Example usage:
var names = ["John", "Alice", "Bob", "David", "Eve"];
console.log("First letters of names:", extractFirstLetters(names)); // Output: ["J", "A", "B","D","E"]
