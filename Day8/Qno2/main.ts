// Question no 2

// Create three seperate files.In the first file,define and export an interface Shape with properties name and area , and a methed calculateArea(). In the second file, define and export a class Circle  that implements  the Shape interface . The class have a property radius and implement the calculate Area method. In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.


import { Circle } from "./second";

let circle = new Circle("Circle", 5);

console.log("Name:", circle.name);

console.log("Area:", circle.calculateArea());


