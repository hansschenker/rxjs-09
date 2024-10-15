import { Observable, OperatorFunction } from 'rxjs';
export type ErrorHandlingStrategyReturnType<K extends string, T> = K extends "catchError" ? OperatorFunction<any, T> : K extends "retry" ? OperatorFunction<any, T> : K extends "retryWhen" ? OperatorFunction<any, T> : K extends "throwError" ? Observable<never> : never;
export declare function errorWith<K extends string, T>(strategy: K, ...args: any[]): ErrorHandlingStrategyReturnType<K, T>;
//# sourceMappingURL=errorhandling.d.ts.map