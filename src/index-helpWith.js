"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const utility_1 = require("./utility");
// tap:
const tap$ = (0, utility_1.helpWith)('tap', (value) => console.log(`Side effect: ${value}`));
tap$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
// Output: Side effect: 1, 1, Side effect: 2, 2, Side effect: 3, 3
// dematerialize:
const dematerialize$ = (0, utility_1.helpWith)('dematerialize');
dematerialize$((0, rxjs_1.of)(rxjs_1.Notification.createNext(1), rxjs_1.Notification.createComplete())).subscribe(console.log);
// Output: 1 (dematerializes a Notification object)
// toArray:
const toArray$ = (0, utility_1.helpWith)('toArray');
toArray$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
// Output: [1, 2, 3] (collects all emitted values into an array)
// expand:
const expand$ = (0, utility_1.helpWith)('expand', (value) => (0, rxjs_1.of)(value * 2));
expand$((0, rxjs_1.of)(1)).subscribe(console.log);
// Output: 1, 2, 4, 8, ... (recursively expands each value)
// delay:
const delay$ = (0, utility_1.helpWith)('delay', 1000); // Delay by 1000ms
delay$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
// Output (after 1 second): 1, 2, 3
// delayWhen:
const delayWhen$ = (0, utility_1.helpWith)('delayWhen', () => (0, rxjs_1.timer)(2000)); // Delay by 2000ms
delayWhen$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
// Output (after 2 seconds): 1, 2, 3
