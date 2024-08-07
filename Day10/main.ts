// Day 10

// Question no 1 Implement a Basic Counter

// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:

// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter.
// Example Usage:

// const counter = new Counter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // Output: 2
// counter.decrement();
// console.log(counter.getValue()); // Output: 1

class Counter {

    count : number;
    
    constructor() {
        this.count = 0;
    }

    increment():void {
        this.count++;
    }

    decrement():void{
        this.count--;
    }

    getValue():number {
        return this.count;
    };
}
    const counter = new Counter();
    counter.increment();

    counter.increment();

    console.log(counter.getValue()); // Output: 2

    counter.decrement();

    console.log(counter.getValue()); // Output: 1


// Question no 2 (Implement a Simple Student Record)

// Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:

// setName(name: string): void - Sets the student's name.
// setGrade(grade: number): void - Sets the student's grade.
// getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
// Example Usage:

// const student = new Student();
// student.setName("Alice");
// student.setGrade(90);
// console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }

class Student{
    name : string;
    grade : number;

    constructor() {
        this.name = "";
        this.grade = 0;
    }

    setName(name: string): void {
        this.name = name;
    }

    setGrade(grade: number): void {
        this.grade = grade;
    }

    getRecord(): { name: string; grade: number } {
        return { name: this.name, grade: this.grade };
    }
};

const student = new Student();

student.setName("Alice");

student.setGrade(90);

console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
