"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterWith = void 0;
const rxjs_1 = require("rxjs");
function filterWith(type, value) {
    switch (type) {
        case "throttle":
            return (source$) => source$.pipe((0, rxjs_1.throttle)(() => value));
        case "debounceTime":
            return (source$) => source$.pipe((0, rxjs_1.debounceTime)(value));
        case "sampleTime":
            return (source$) => source$.pipe((0, rxjs_1.sampleTime)(value));
        default:
            throw new Error(`Unknown filter type: ${type}`);
    }
}
exports.filterWith = filterWith;
