// Question 1  (Sum Of An Array)
// 1: Write a function named sumArray that takes an array of numbers as input.
// 2: The function should return the sum of all numbers in the array.
// 3: Ensure your function works correctly by testing it with different inputs.
// function sumArray(...nums:number[]){
//     return nums.reduce((acc, curr) => acc + curr, 0);
// };
// console.log(sumArray(1, 2, 3, 4, 5)); // Output: 15
// console.log(sumArray()); // Output: 0
// console.log(sumArray(9, 12, 3, 8, 7)); // Output: 39
// Or
// function sumArray(...nums: number[]){
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++){
//         sum += nums[i];
//     }
//     return sum;
// };
// console.log(sumArray(6, 12, 7, 7, 5)); // Output: 37
// console.log(sumArray(3,7,0,5,7,3,6,8,6,5,4)); // Output: 54
// console.log(sumArray(1, 2, 3, 4, 5)); // Output: 15
// Question 3 (Reverse A String)
// Write a function named reverseString that takes a string as input.The function should return the reversed version of the input string. Ensure your function works correctly by testing it with different inputs.
function reverseString(str) {
    return str.split('').reverse().join('');
}
;
console.log(reverseString("Hello World")); // Output: "dlroW olleH"
console.log(reverseString("Arishah")); // Output: "hahsirA"
console.log(reverseString("madam")); // Output: "madam"
