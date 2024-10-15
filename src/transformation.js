"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapWith = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function mapWith(strategy, ...args) {
    switch (strategy) {
        case "map":
            return (0, rxjs_1.map)(args[0]);
        case "scan":
            return (0, rxjs_1.scan)(args[0], args[1]);
        case "pluck":
            return (0, operators_1.pluck)(...args);
        case "mapTo":
            return (0, operators_1.mapTo)(args[0]);
        case "mergeMap":
            return (0, operators_1.mergeMap)(args[0]);
        case "concatMap":
            return (0, operators_1.concatMap)(args[0]);
        case "switchMap":
            return (0, operators_1.switchMap)(args[0]);
        case "exhaustMap":
            return (0, operators_1.exhaustMap)(args[0]);
        default:
            throw new Error(`Unknown strategy: ${strategy}`);
    }
}
exports.mapWith = mapWith;
