"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const errorhandling_1 = require("./errorhandling");
const operators_1 = require("rxjs/operators");
// Example usage with catchError
const source$ = (0, rxjs_1.of)(1, 2, 3).pipe((0, operators_1.map)(value => {
    if (value === 2) {
        throw new Error('Error at value 2');
    }
    return value;
}), (0, errorhandling_1.errorWith)('catchError', (err, caught) => {
    console.error(err);
    return (0, rxjs_1.of)(0);
}));
source$.subscribe(console.log); // Output: 1, 0, 3
