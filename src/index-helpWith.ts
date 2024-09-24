import { of, Notification, timer } from 'rxjs';
import { helpWith } from './utility';
import { map } from 'rxjs/operators';

// tap:
const tap$ = helpWith('tap', (value: number) => console.log(`Side effect: ${value}`));
tap$(of(1, 2, 3)).subscribe(console.log);
// Output: Side effect: 1, 1, Side effect: 2, 2, Side effect: 3, 3

// dematerialize:
const dematerialize$ = helpWith('dematerialize');
dematerialize$(of(Notification.createNext(1), Notification.createComplete())).subscribe(console.log);
// Output: 1 (dematerializes a Notification object)

// toArray:
const toArray$ = helpWith('toArray');
toArray$(of(1, 2, 3)).subscribe(console.log);
// Output: [1, 2, 3] (collects all emitted values into an array)

// expand:
const expand$ = helpWith('expand', (value: number) => of(value * 2));
expand$(of(1)).subscribe(console.log);
// Output: 1, 2, 4, 8, ... (recursively expands each value)

// delay:
const delay$ = helpWith('delay', 1000); // Delay by 1000ms
delay$(of(1, 2, 3)).subscribe(console.log);
// Output (after 1 second): 1, 2, 3

// delayWhen:
const delayWhen$ = helpWith('delayWhen', () => timer(2000)); // Delay by 2000ms
delayWhen$(of(1, 2, 3)).subscribe(console.log);
// Output (after 2 seconds): 1, 2, 3