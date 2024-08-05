"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(name, radius) {
        this.name = name;
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
