// Day 12

// ### Question 1: Remove Duplicates from Sorted Array

// *Problem:*
// You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.

// *Example:*
// typescript
// Input: [1, 1, 2, 2, 3, 4, 4, 5]
// Output: 5
// Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.


// *Note:*
// * Only return the length of the unique elements.
// * Duplicate elements should be ignored.


function removeDuplicates(nums: number[]): number {
    if (nums.length <= 1) {
        return nums.length;
    }
    
    let count = 0;
    for (let i = 1; i < nums.length; i++) {

        if (nums[i]!== nums[count]) {
            count++;
            nums[count] = nums[i];
        }

    }
    
    return count + 1;
}

let result:number[] = [1,2,2,2,3,3,3,4,5,6,6,7,7,8,9];

console.log(removeDuplicates(result)); // Output 9

// Question 2: Move Zeroes

// *Problem:
// You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.

// *Example:
// typescript
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]


// *Note:*
// * You must modify the array in-place.
// * The relative order of the non-zero elements should remain the same.


function moveZeroes(nums: number[]): void {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!== 0) {
            nums[count] = nums[i];
            count++;
        }
    }
    
    for (let i = count; i < nums.length; i++) {
        nums[i] = 0;
    }
}

let result2: number[] = [0, 1, 0, 3, 12];

moveZeroes(result2);

console.log(result2); // Output: [1, 3, 12, 0, 0]

let result3 : number[] = [-1, 0, 1, 2, 3, 0, 4, 5, 6, 0, -7, 8, 9, 10, 0, 11, 12, 0, -13, 14, 0, 15]

moveZeroes(result3);  

console.log(result3); // Output: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -13, 14, 15, 0, 0, 0, 0, 0]


