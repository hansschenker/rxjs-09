

import { Observable, of } from 'rxjs';
import { errorWith } from './errorhandling';
import { map } from 'rxjs/operators';

// Example usage with catchError
const source$ = of(1, 2, 3).pipe(
  map(value => {
    if (value === 2) {
      throw new Error('Error at value 2');
    }
    return value;
  }),
  errorWith('catchError', (err: any, caught: Observable<number>) => {
    console.error(err);
    return of(0);
  })
);

source$.subscribe(console.log); // Output: 1, 0, 3