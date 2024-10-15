"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const flattening_1 = require("./flattening");
// switchMap:
const switchMap$ = (0, flattening_1.flattenWith)('switchMap', (value) => (0, rxjs_1.of)(value * 2));
switchMap$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6
// mergeMap:
const mergeMap$ = (0, flattening_1.flattenWith)('mergeMap', (value) => (0, rxjs_1.of)(value * 2));
mergeMap$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6
// concatMap:
const concatMap$ = (0, flattening_1.flattenWith)('concatMap', (value) => (0, rxjs_1.of)(value * 2));
concatMap$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6
// exhaustMap:
const exhaustMap$ = (0, flattening_1.flattenWith)('exhaustMap', (value) => (0, rxjs_1.of)(value * 2));
exhaustMap$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6
// mergeAll:
const mergeAll$ = (0, flattening_1.flattenWith)('mergeAll');
mergeAll$((0, rxjs_1.of)((0, rxjs_1.of)(1, 2, 3), (0, rxjs_1.of)(4, 5, 6))).subscribe(console.log); // Output: 1, 2, 3, 4, 5, 6
// concatAll:
const concatAll$ = (0, flattening_1.flattenWith)('concatAll');
concatAll$((0, rxjs_1.of)((0, rxjs_1.of)(1, 2, 3), (0, rxjs_1.of)(4, 5, 6))).subscribe(console.log); // Output: 1, 2, 3, 4, 5, 6
// exhaustAll:
const exhaustAll$ = (0, flattening_1.flattenWith)('exhaustAll');
exhaustAll$((0, rxjs_1.of)((0, rxjs_1.of)(1, 2, 3), (0, rxjs_1.of)(4, 5, 6))).subscribe(console.log); // Output: 1, 2, 3, 4, 5, 6
