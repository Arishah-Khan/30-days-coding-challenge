// Question no 5 (Remove duplicates from array)

// Write a typescript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed.
// Requirements: 
// the function should iterate through the array and check for duplicates manually.
// you can use additional arrays and variables to keep track of seen elements.

function removeDuplicates(num:number[]):number[]{

    
    const uniqueNums: number[] = [];
    
    for(let i = 0; i < num.length; i++){
        
        let isDuplicate = false;
        
        for(let j = 0; j < uniqueNums.length; j++){
            
            if(num[i] === uniqueNums[j]){
                
                isDuplicate = true;
                break;
            }
            
        }
        
        if(!isDuplicate){
            
            uniqueNums.push(num[i]);
        }
    }
    
    return uniqueNums;
};



// Test the function

let inputArray1:number[]= [3,7,8,9,4,3,9,2,8,6,3,9,0,5,4];
console.log(removeDuplicates(inputArray1)); // Output: [3,7,8,9,4,2,6,0,5]


let inputArray2:number[]= [1,2,2,2,3,3,4,5,5,6,7,8,9,9,9,10];
console.log(removeDuplicates(inputArray2)); // Output: [1,2,3,4,5,6,7,8,9,10]

// Question no 6(Find the second largest number in an array)

// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array.

// Requirements:

// The function should manually find the largest numbers by iterating through the array.
// you can use additional variables to keep track of the largest and second largest numbers.


function findSecondLargest(nums: number[]): number {
    if (nums.length < 2) {
        throw new Error("Array must contain at least two elements.");
    }

    let largest = nums[0];
    let secondLargest = nums[0];

    // Finding initial largest and second largest
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != largest) {
            if (nums[i] > largest) {
                secondLargest = largest;
                largest = nums[i];
            } else {
                secondLargest = nums[i];
            }
            break;
        }
    }

    // Finding the actual largest and second largest
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

// Test the function
let result1: number[] = [3, 8, 9, 4, 7, 2, 1, 6];
console.log(findSecondLargest(result1)); // Output: 8

let result2: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(findSecondLargest(result2)); // Output: 9

let result3: number[] = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
console.log(findSecondLargest(result3)); // Output: -2
