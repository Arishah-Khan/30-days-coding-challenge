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
// // Expected output: [1, 2, 3, 4, 5, 6, 7, 8];

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
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
};

function valueSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

let arr3 = [7, 9, 3, 0, 8, 1];
let arr4 = [5, 2, 6, 4];

let sortedArr3 = valueSort(arr3);
let sortedArr4 = valueSort(arr4);

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


function firstNonRepeatedCharacter(s: string): string {
    let charCount : {
        [key: string]: number
    } = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return "";
}

const s = "swiss";

console.log(firstNonRepeatedCharacter(s)); // Output: "w"

const t = "oooo";

console.log(firstNonRepeatedCharacter(t)); // Output: ""

const w = "hello";

console.log(firstNonRepeatedCharacter(w)); // Output: "h"