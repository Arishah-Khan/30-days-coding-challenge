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

class Stack<T>{

    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
};

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop());  // Output: 2
console.log(stack.pop());  // Output: 1
console.log(stack.isEmpty()); // Output: true

const stack1 = new Stack<string>();

stack1.push("Apple");
stack1.push("Banana");
stack1.push("Cherry");

console.log(stack1.peek()); // Output: Cherry
console.log(stack1.pop());  // Output: Cherry
console.log(stack1.pop());  // Output: Banana
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


class Queue<T>{
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

}

const queue = new Queue<string>();

queue.enqueue("a");

queue.enqueue("b");

console.log(queue.peek()); // Output: "a"

console.log(queue.dequeue());  // Output: "a"

console.log(queue.dequeue());  // Output: "b"

console.log(queue.isEmpty()); // Output: true

const queue1 = new Queue<number>();

queue1.enqueue(1);

queue1.enqueue(2);

console.log(queue1.peek()); // Output: 1

console.log(queue1.dequeue());  // Output: 1

console.log(queue1.isEmpty()); // Output: false

