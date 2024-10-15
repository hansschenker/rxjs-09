"use strict";
// count:
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const aggregation_1 = require("./aggregation");
const count$ = (0, aggregation_1.aggregateWith)('count');
count$((0, rxjs_1.of)(1, 2, 3, 4)).subscribe(console.log); // Output: 4
// max:
const max$ = (0, aggregation_1.aggregateWith)('max', (a, b) => a - b);
max$((0, rxjs_1.of)(1, 7, 8, 4)).subscribe(console.log); // Output: 8
// reduce:
const reduce$ = (0, aggregation_1.aggregateWith)('reduce', (acc, value) => acc + value, 0);
reduce$((0, rxjs_1.of)(1, 2, 3, 4)).subscribe(console.log); // Output: 10
// scan:
const scan$ = (0, aggregation_1.aggregateWith)('scan', (acc, value) => acc + value, 0);
scan$((0, rxjs_1.of)(1, 2, 3, 4)).subscribe(console.log); // Output: 1, 3, 6, 10
