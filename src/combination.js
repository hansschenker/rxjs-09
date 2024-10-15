"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineWith = void 0;
const rxjs_1 = require("rxjs");
function combineWith(strategy, ...args) {
    switch (strategy) {
        case "combineLatest":
            return (0, rxjs_1.combineLatest)(args[0]);
        case "concat":
            return (0, rxjs_1.concat)(...args);
        case "merge":
            return (0, rxjs_1.merge)(...args);
        case "forkJoin":
            return (0, rxjs_1.forkJoin)(args[0]);
        case "race":
            return (0, rxjs_1.race)(...args);
        case "zip":
            return (0, rxjs_1.zip)(...args);
        case "window":
            return (0, rxjs_1.window)(args[0]);
        case "windowCount":
            return (0, rxjs_1.windowCount)(args[0], args[1]);
        case "windowTime":
            return (0, rxjs_1.windowTime)(args[0]);
        case "windowToggle":
            return (0, rxjs_1.windowToggle)(args[0], args[1]);
        case "windowWhen":
            return (0, rxjs_1.windowWhen)(args[0]);
        default:
            throw new Error(`Unknown strategy: ${strategy}`);
    }
}
exports.combineWith = combineWith;
