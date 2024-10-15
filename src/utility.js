"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpWith = void 0;
const rxjs_1 = require("rxjs");
function helpWith(strategy, ...args) {
    switch (strategy) {
        case "tap":
            return (0, rxjs_1.tap)(args[0]); // Expects a side effect function
        case "dematerialize":
            return (0, rxjs_1.dematerialize)(); // Expects no arguments
        case "materialize":
            return (0, rxjs_1.materialize)(); // Expects no arguments
        case "observeOn":
            return (0, rxjs_1.observeOn)(args[0]); // Expects a scheduler
        case "subscribeOn":
            return (0, rxjs_1.subscribeOn)(args[0]); // Expects a scheduler
        case "toArray":
            return (0, rxjs_1.toArray)(); // Collects all emitted values into an array
        case "expand":
            return (0, rxjs_1.expand)(args[0]); // Expects an expansion function
        case "delay":
            return (0, rxjs_1.delay)(args[0]); // Expects a delay time
        case "delayWhen":
            return (0, rxjs_1.delayWhen)(args[0]); // Expects a notifier function
        default:
            throw new Error(`Unknown strategy: ${strategy}`);
    }
}
exports.helpWith = helpWith;
