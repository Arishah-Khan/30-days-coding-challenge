// Question no 3 (First And Last Element) 
// Write a typescript function that takes an array of numbers and return a new array containing only the first and last elements of the input array?
// Requirements:
// if the array has only one element the function should returns an array with that element duplicated
// Ensure the function handles arrays with a single element coorectly
function numArray(num) {
    if (num.length === 1) {
        return [num[0], num[0]];
    }
    return [num[0], num[num.length - 1]];
}
;
// Test the function
var inputArray = [4, 7, 2, 4, 9];
var result = numArray(inputArray);
console.log(result); // Output: [4, 9]
var singleElementArray = [7];
var singleElementResult = numArray(singleElementArray);
console.log(singleElementResult); // Output: [7, 7]
