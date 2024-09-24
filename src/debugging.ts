import { Observable, OperatorFunction, Subscriber, Operator } from 'rxjs';

export function debugWith<T>(
  logger: (info: string, value?: any) => void = console.log // Default logger is console.log
): OperatorFunction<T, T> {
  return (source: Observable<T>): Observable<T> => {
    // Patch the lift method of the source Observable
    let patchedObservable = new Observable<T>((subscriber: Subscriber<T>) => {
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
    patchedObservable.lift = function <R>(operator: Operator<T, R>): Observable<R> {
      const liftedObservable = source.lift.call(this, operator) as Observable<R>;
      const operatorName = operator.constructor?.name || 'unknown operator';
      logger(`Operator applied: ${operatorName}`);
      return liftedObservable;
    };

    return patchedObservable;
  };
}
