"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const filtering_1 = require("./filtering");
// throttle:
const throttle$ = (0, filtering_1.filterWith)("throttle", (x) => (0, rxjs_1.interval)(1000));
throttle$((0, rxjs_1.of)(1, 2, 3, 4)).subscribe(console.log);
// debounceTime:
const debounceTime$ = (0, filtering_1.filterWith)("debounceTime", 500);
debounceTime$((0, rxjs_1.of)(1, 2, 3, 4)).subscribe(console.log);
// sampleTime:
const sampleTime$ = (0, filtering_1.filterWith)("sampleTime", 2000);
sampleTime$((0, rxjs_1.of)(1, 2, 3, 4)).subscribe(console.log);
