import { catchError, Observable, OperatorFunction, retry, retryWhen, throwError } from 'rxjs';


export type ErrorHandlingStrategyReturnType<K extends string, T> =
  K extends "catchError" ? OperatorFunction<any, T> :
  K extends "retry" ? OperatorFunction<any, T> :
  K extends "retryWhen" ? OperatorFunction<any, T> :
  K extends "throwError" ? Observable<never> :
  never;

export function errorWith<K extends string, T>(
  strategy: K,
  ...args: any[]
): ErrorHandlingStrategyReturnType<K, T> {
  switch (strategy) {
    case "catchError":
      return catchError(args[0]) as unknown as ErrorHandlingStrategyReturnType<K, T>;
    case "retry":
      return retry(args[0]) as unknown as ErrorHandlingStrategyReturnType<K, T>;
    case "retryWhen":
      return retryWhen(args[0]) as unknown as ErrorHandlingStrategyReturnType<K, T>;
    case "throwError":
      return throwError(args[0]) as unknown as ErrorHandlingStrategyReturnType<K, T>;
    default:
      throw new Error(`Unknown strategy: ${strategy}`);
  }
}
