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
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.increment = function () {
        this.count++;
    };
    Counter.prototype.decrement = function () {
        this.count--;
    };
    Counter.prototype.getValue = function () {
        return this.count;
    };
    ;
    return Counter;
}());
var counter = new Counter();
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
var Student = /** @class */ (function () {
    function Student() {
        this.name = "";
        this.grade = 0;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getRecord = function () {
        return { name: this.name, grade: this.grade };
    };
    return Student;
}());
;
var student = new Student();
student.setName("Alice");
student.setGrade(90);
console.log(student.getRecord()); // Output: { name: "Alice", grade: 90 }
