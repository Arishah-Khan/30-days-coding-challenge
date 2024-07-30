// Question no 3 (First And Last Element) 

// Write a typescript function that takes an array of numbers and return a new array containing only the first and last elements of the input array?

// Requirements:

// if the array has only one element the function should returns an array with that element duplicated
// Ensure the function handles arrays with a single element coorectly

function numArray(num:number[]):number[]{
    if(num.length === 1){
        return [num[0], num[0]];
    }
    return [num[0], num[num.length - 1]];
};

// Test the function

const inputArray = [4, 7, 2, 4, 9];
const result = numArray(inputArray);
console.log(result); // Output: [4, 9]

const singleElementArray = [7];

const singleElementResult = numArray(singleElementArray);

console.log(singleElementResult); // Output: [7, 7]

// Question no 4 (Find The Largest Number)

// Write a typescript function that takes an array of numbers and returns the largest number in the array.

// The function should handles with positive and negative numbers.
// if the array contains one number, return that number 
// Ensure the function handles an empty array gracefully ( you might decide to return undefined or throw an error based on your needs).

function findLargestNumber(arr: number[]): number | undefined {
    if (arr.length === 0) {
        return undefined;
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Test the function

const array1 = [3, 4, 1, 6, 9, 2];
const result1 = findLargestNumber(array1);
console.log(result1); // Output: 9

const array2 = [5, -2, 0, 7, 3];
const result2 = findLargestNumber(array2);
console.log(result2); // Output: 7

const array3 = [-1, -5, -2, -3, -7];
const result3 = findLargestNumber(array3);
console.log(result3); // Output: -1

const array4: number[] = [];
const result4 = findLargestNumber(array4);
console.log(result4); // Output: undefined

const array5 = [6];
const result5 = findLargestNumber(array5);
console.log(result5); // Output: 6
