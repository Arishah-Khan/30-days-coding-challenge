// Day 9
// Question no 1(Implement a stack using typescript)
// Problem Statement:
// Implement a stack using TypeScript. The stack should have the following methods:
// 1. push(item: T): void - Adds an item to the top of the stack.
// 2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.
// *Constraints:*
// - Use generics to make the stack implementation type-safe.
// - The stack should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// console.log(stack.peek()); // Output: 2
// console.log(stack.pop());  // Output: 2
// console.log(stack.pop());  // Output: 1
//console.log(stack.isEmpty()); // Output: true
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
;
var stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true
var stack1 = new Stack();
stack1.push("Apple");
stack1.push("Banana");
stack1.push("Cherry");
console.log(stack1.peek()); // Output: Cherry
console.log(stack1.pop()); // Output: Cherry
console.log(stack1.pop()); // Output: Banana
console.log(stack1.isEmpty()); // Output: false
// Question 2: Implement a Queue using TypeScript
// *Problem Statement:*
// Implement a queue using TypeScript. The queue should have the following methods:
// 1. enqueue(item: T): void - Adds an item to the end of the queue.
// 2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.
// Constraints:*
// - Use generics to make the queue implementation type-safe.
// - The queue should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const queue = new Queue<string>();
// queue.enqueue("a");
// queue.enqueue("b");
// console.log(queue.peek()); // Output: "a"
// console.log(queue.dequeue());  // Output: "a"
// console.log(queue.dequeue());  // Output: "b"
// console.log(queue.isEmpty()); // Output: true
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.peek()); // Output: "a"
console.log(queue.dequeue()); // Output: "a"
console.log(queue.dequeue()); // Output: "b"
console.log(queue.isEmpty()); // Output: true
var queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
console.log(queue1.peek()); // Output: 1
console.log(queue1.dequeue()); // Output: 1
console.log(queue1.isEmpty()); // Output: true
