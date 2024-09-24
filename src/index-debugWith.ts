

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { debugWith } from './debugging';

const source$ = of(1, 2, 3).pipe(
  debugWith((info, value) => console.log(info, value)),
  map(x => x * 2)
);

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