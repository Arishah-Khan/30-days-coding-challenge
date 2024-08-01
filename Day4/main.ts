// // Question no 7 (Find the duplicate numbers in an array)

// // Write a typescript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. if there are no duplicates,return an empty array.


function findDuplicates(numbers: number[]): number[] {
    let emptyArray: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        let isDuplicate: boolean = false;

        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                isDuplicate = true;
                break;
            }
        }

        // Check if the duplicate is already in the emptyArray
        if (isDuplicate && !emptyArray.includes(numbers[i])) {
            emptyArray.push(numbers[i]);
        }
    }

    return emptyArray;
}

// Test the function
let numbers = [1, 2, 3, 4, 5, 2, 3, 6, 5];
console.log(findDuplicates(numbers)); // Output: [2, 3, 5]

let numbers2 = [1, 2, 3, 4, 5];
console.log(findDuplicates(numbers2)); // Output: []

// Question no 8 (Filter students with marks greater than 80)

// Craete an array of objects where each object represents a student with properties name,age and marks.Write a function that filters and prints the data of students who have marks greater than 80.

interface Student {
    name: string;
    age: number;
    marks: number;
}

function printTopStudents(students:Student[]):void{

    for (let student of students) {
        if (student.marks > 80) {
            console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
        }
    }
}

let students: Student[] = [
    {name: "John", age: 18, marks: 90},
    {name: "Ali", age: 20, marks: 65},
    {name: "Sara", age: 19, marks: 75},
    {name: "Charlie", age: 21, marks: 95}
];

printTopStudents(students); // Output: Name: John, Age: 18, Marks:90  Name: Charlie, Age: 21, Marks: 95
