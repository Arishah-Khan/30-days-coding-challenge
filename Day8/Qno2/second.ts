import { Shape } from "./first";

export class Circle implements Shape {
    name: string;
    area:number;
    radius: number;

    constructor(name: string, radius: number) {
        this.name = name;
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
