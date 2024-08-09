// Day  11
// Question 1: Merge Two Sorted Arrays
// Write a function mergeSortedArrays that takes two sorted arrays of numbers and returns a single sorted array by merging them. You cannot use any built-in sort function.
// typescript
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     // Your implementation here
// }
// // Example Usage:
// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 6, 8];
// console.log(mergeSortedArrays(arr1, arr2)); 
// // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
//  Hint:
// - *Hint 1*: Start with two pointers, one at the beginning of each array.
// - *Hint 2*: Compare the elements at both pointers and add the smaller element to the result array.
// - *Hint 3*: Move the pointer of the array from which the element was taken.
// - *Hint 4*: Repeat until all elements from both arrays are merged.
// Solution:
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const mergedArray: number[] = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     // Add any remaining elements from arr1 or arr2 to the mergedArray
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }
//     return mergedArray;
// };
// const arr1 = [1, 3, 5, 7];
// const arr2 :number[]= [2, 4, 6, 8];
// console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// let arr3 :number[] = [1,3,5,7]
// let arr4:number[] = [5, 2, 6, 4]
// console.log(mergeSortedArrays(arr3, arr4)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(mergeSortedArrays(arr3, arr4)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
function mergeSortedArrays(arr1, arr2) {
    var mergedArray = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
;
function valueSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
var arr3 = [7, 9, 3, 0, 8, 1];
var arr4 = [5, 2, 6, 4];
var sortedArr3 = valueSort(arr3);
var sortedArr4 = valueSort(arr4);
console.log(mergeSortedArrays(sortedArr3, sortedArr4)); // Output: [0, 1, 2, 3, 4, 5, 6, 8, 9]
// Question 2: Find the First Non-Repeated Character
// Write a function firstNonRepeatedCharacter that takes a string and returns the first character that does not repeat. If all characters repeat, return an empty string.
// typescript
// function firstNonRepeatedCharacter(s: string): string {
//     // Your implementation here
// }
// // Example Usage:
// const s = "swiss";
// console.log(firstNonRepeatedCharacter(s)); 
// // Expected output: "w"
// Hint:
// - *Hint 1*: Create an object to count the frequency of each character in the string.
// - *Hint 2*: Iterate through the string and update the count for each character.
// - *Hint 3*: Iterate through the string again and find the first character with a count of 1 in the object.
// - *Hint 4*: If no character with a count of 1 is found, return an empty string.
// Solution:
function firstNonRepeatedCharacter(s) {
    var charCount = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (var _a = 0, s_2 = s; _a < s_2.length; _a++) {
        var char = s_2[_a];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return "";
}
var s = "swiss";
console.log(firstNonRepeatedCharacter(s)); // Output: "w"
var t = "oooo";
console.log(firstNonRepeatedCharacter(t)); // Output: ""
var w = "hello";
console.log(firstNonRepeatedCharacter(w)); // Output: "h"
