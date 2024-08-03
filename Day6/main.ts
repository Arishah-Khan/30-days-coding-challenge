// Day 6

// Question no 1 (Simple Calculator)

// Create a simple calculator that can perform addition,subtraction,multiplication and division.
// 1: Funtional Programming Approach:
// Write functions for each operation: add,subt,multiply and divide.Implement a funtion calculate that takes two numbers and an operation(as a string) and returns teh result of the operation.

//2: Objest Oriented Programming Approach:
// Create a Calculator class with methods for each operation.Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.

// Functional Programming Approach:

const calculate = (num1:number, num2:number, operation:string):number|never => {

    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 === 0) {
                throw new Error('Cannot divide by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operation');
    }
};

// Test the functional programming approach:

console.log(calculate(5, 3, "add")); // Output: 8
console.log(calculate(5, 3, "subtract")); // Output: 2
console.log(calculate(5, 3, "multiply")); // Output: 15
console.log(calculate(10, 2, "divide")); // Output: 5

try {
    console.log(calculate(5, 0, "divide")); // Output: Error: Cannot divide by zero
} catch (error) {
    console.error(error.message);
}

try {
    console.log(calculate(5, 3, "invalid")); // Output: Error: Invalid operation
} catch (error) {
    console.error(error.message);
}

// Objet Oriented Programming Approach:

class Calculator {
    constructor() {}

    add(num1: number, num2: number): number {
        return num1 + num2;
    }

    subtract(num1: number, num2: number): number {
        return num1 - num2;
    }

    multiply(num1: number, num2: number): number {
        return num1 * num2;
    }

    divide(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error('Cannot divide by zero');
        }
        return num1 / num2;
    }

    calculate(num1: number, num2: number, operation: string): number|never {
        return this[operation](num1, num2);
    }
}

// Test the object oriented programming approach:

const calculator = new Calculator();

console.log(calculator.calculate(5, 3, "add")); // Output: 8
console.log(calculator.calculate(5, 3, "subtract")); // Output: 2
console.log(calculator.calculate(5, 3, "multiply")); // Output: 15
console.log(calculator.calculate(10, 2, "divide")); // Output: 5

try {
    console.log(calculator.calculate(5, 0, "divide")); // Output: Error: Cannot divide by zero
} catch (error) {
    console.error(error.message);
}

try {
    console.log(calculator.calculate(5, 3, "invalid")); // Output: Error: Invalid operation
} catch (error) {
    console.error(error.message);
}

// Question no 2 (Fibonacci Seperat Element by type)

// Given an array with mixed types of elements, seperate them into different arrays based on their type(number,string,boolean).

function separatedByType(mixedArray: any[]): [number[], string[], boolean[]] {
    let numbers: number[] = [];
    let strings: string[] = [];
    let booleans: boolean[] = [];

    for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] === "number") {
            numbers.push(mixedArray[i]);
        } else if (typeof mixedArray[i] === "string") {
            strings.push(mixedArray[i]);
        } else if (typeof mixedArray[i] === "boolean") {
            booleans.push(mixedArray[i]);
        }
    }
    return [numbers, strings, booleans];
}

let mixedArray: any[] = [2, "hello", true, 9, "world", false, 6, "hi", true];

let [numbers, strings, booleans] = separatedByType(mixedArray);

console.log('Numbers:', numbers); // Output: [2, 9, 6]
console.log('Strings:', strings); // Output: ["hello", "world", "hi"]
console.log('Booleans:', booleans); // Output: [true, false, true]
