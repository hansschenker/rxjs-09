"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugWith = void 0;
const rxjs_1 = require("rxjs");
function debugWith(logger = console.log // Default logger is console.log
) {
    return (source) => {
        // Patch the lift method of the source Observable
        let patchedObservable = new rxjs_1.Observable((subscriber) => {
            return source.subscribe({
                next(value) {
                    logger('Value emitted:', value);
                    subscriber.next(value); // Pass the value to the original subscriber
                },
                error(err) {
                    logger('Error:', err);
                    subscriber.error(err); // Pass the error to the original subscriber
                },
                complete() {
                    logger('Complete');
                    subscriber.complete(); // Notify completion to the original subscriber
                }
            });
        });
        // Patch the lift method to intercept operator calls
        patchedObservable.lift = function (operator) {
            var _a;
            const liftedObservable = source.lift.call(this, operator);
            const operatorName = ((_a = operator.constructor) === null || _a === void 0 ? void 0 : _a.name) || 'unknown operator';
            logger(`Operator applied: ${operatorName}`);
            return liftedObservable;
        };
        return patchedObservable;
    };
}
exports.debugWith = debugWith;
