


// count:

import { of } from "rxjs";
import { aggregateWith } from "./aggregation";

const count$ = aggregateWith('count');
count$(of(1, 2, 3, 4)).subscribe(console.log); // Output: 4

// max:

const max$ = aggregateWith('max', (a: number, b: number) => a - b);
max$(of(1, 7, 8, 4)).subscribe(console.log); // Output: 8

// reduce:


const reduce$ = aggregateWith('reduce', (acc: number, value: number) => acc + value, 0);
reduce$(of(1, 2, 3, 4)).subscribe(console.log); // Output: 10

// scan:

const scan$ = aggregateWith('scan', (acc: number, value: number) => acc + value, 0);
scan$(of(1, 2, 3, 4)).subscribe(console.log); // Output: 1, 3, 6, 10