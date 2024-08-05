// Day 8  (Typescript Modules (Export and Import))

// Question no 1

// Create two seperate files . In the first file. define and export two functions: calculateArea. (calculates the area of a rectangle given its width and height) and calculateParameter(calculates the perimeter of a given its width and height). In the second file,import both functions and use tyhem to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10.Print the result to teh console.

import {calculateArea,calculatePerimeter} from "./areaAndPerimeter";


let width = 5;
let height = 10;

let area = calculateArea(width, height);
let perimeter = calculatePerimeter(width, height);

console.log("Area of Rectangle:", area);
console.log("Perimeter of Rectangle:", perimeter);

