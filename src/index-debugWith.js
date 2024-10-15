"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const debugging_1 = require("./debugging");
const source$ = (0, rxjs_1.of)(1, 2, 3).pipe((0, debugging_1.debugWith)((info, value) => console.log(info, value)), (0, operators_1.map)(x => x * 2));
source$.subscribe(console.log);
// Output:
// Value emitted: 1
// Operator applied: MapOperator
// 2
// Value emitted: 2
// Operator applied: MapOperator
// 4
// Value emitted: 3
// Operator applied: MapOperator
// 6
// Complete
