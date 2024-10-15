"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorWith = void 0;
const rxjs_1 = require("rxjs");
function errorWith(strategy, ...args) {
    switch (strategy) {
        case "catchError":
            return (0, rxjs_1.catchError)(args[0]);
        case "retry":
            return (0, rxjs_1.retry)(args[0]);
        case "retryWhen":
            return (0, rxjs_1.retryWhen)(args[0]);
        case "throwError":
            return (0, rxjs_1.throwError)(args[0]);
        default:
            throw new Error(`Unknown strategy: ${strategy}`);
    }
}
exports.errorWith = errorWith;
