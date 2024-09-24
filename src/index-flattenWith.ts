import { of } from "rxjs";
import { flattenWith } from "./flattening";

// switchMap:
const switchMap$ = flattenWith('switchMap', (value: number) => of(value * 2));
switchMap$(of(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6

// mergeMap:
const mergeMap$ = flattenWith('mergeMap', (value: number) => of(value * 2));
mergeMap$(of(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6

// concatMap:
const concatMap$ = flattenWith('concatMap', (value: number) => of(value * 2));
concatMap$(of(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6

// exhaustMap:
const exhaustMap$ = flattenWith('exhaustMap', (value: number) => of(value * 2));
exhaustMap$(of(1, 2, 3)).subscribe(console.log); // Output: 2, 4, 6

// mergeAll:
const mergeAll$ = flattenWith('mergeAll');
mergeAll$(of(of(1, 2, 3), of(4, 5, 6))).subscribe(console.log); // Output: 1, 2, 3, 4, 5, 6

// concatAll:
const concatAll$ = flattenWith('concatAll');
concatAll$(of(of(1, 2, 3), of(4, 5, 6))).subscribe(console.log); // Output: 1, 2, 3, 4, 5, 6

// exhaustAll:
const exhaustAll$ = flattenWith('exhaustAll');
exhaustAll$(of(of(1, 2, 3), of(4, 5, 6))).subscribe(console.log); // Output: 1, 2, 3, 4, 5, 6