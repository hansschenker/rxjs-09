"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWith = void 0;
const rxjs_1 = require("rxjs");
const ajax_1 = require("rxjs/ajax");
/**
 * CreateWith function that maps the strategy to the correct return type.
 *
 * @template K
 * @param {K} strategy - The creation strategy name.
 * @param {...any[]} args - The arguments for the creation strategy.
 * @returns {CreationStrategyReturnType<K>} The observable created by the specified strategy.
 */
function createWith(strategy, ...args) {
    switch (strategy) {
        case "timer":
            return (0, rxjs_1.timer)(args[0], args[1]);
        case "range":
            return (0, rxjs_1.range)(args[0], args[1]);
        case "generate":
            return (0, rxjs_1.generate)(args[0], args[1], args[2]);
        case "from":
            return (0, rxjs_1.from)(args[0]);
        case "of":
            return (0, rxjs_1.of)(...args);
        case "fromEvent":
            return (0, rxjs_1.fromEvent)(args[0], args[1]);
        case "interval":
            return (0, rxjs_1.interval)(args[0]);
        case "ajax":
            return (0, ajax_1.ajax)(args[0]);
        case "defer":
            return (0, rxjs_1.defer)(() => args[0]());
        case "iif":
            return (0, rxjs_1.iif)(args[0], args[1], args[2]);
        case "throwError":
            return (0, rxjs_1.throwError)(args[0]);
        default:
            throw new Error(`Unknown strategy: ${strategy}`);
    }
}
exports.createWith = createWith;
