import { Observable, timer, from, of, interval, fromEvent, defer, iif, throwError } from 'rxjs';
import {ajax, AjaxResponse } from 'rxjs/ajax';

// Define CreationStrategy without Extract, and map strategies directly to their return types
export type CreationStrategyReturnType<K extends string> = 
  K extends "timer" ? Observable<number> :
  K extends "from" ? Observable<any> :
  K extends "of" ? Observable<any> :
  K extends "interval" ? Observable<number> :
  K extends "fromEvent" ? Observable<any> :
  K extends "ajax" ? Observable<AjaxResponse<any>> :
  K extends "defer" ? Observable<any> :
  K extends "iif" ? Observable<any> :
  K extends "throwError" ? Observable<never> :
  never;

  export type CreationStrategy =
  /** @subcategory generate number values */
  | { name: "timer"; description: string; returnType: Observable<number> }
  /** @subcategory values from simple values, objects or arrays */
  | { name: "from"; description: string; returnType: Observable<any> }
  /** @subcategory values from simple values, objects or arrays */
  | { name: "of"; description: string; returnType: Observable<any> }
  /** @subcategory generate number values */
  | { name: "interval"; description: string; returnType: Observable<number> }
  /** @subcategory handling DOM events */
  | { name: "fromEvent"; description: string; returnType: Observable<any> }
  /** @subcategory web context */
  | { name: "ajax"; description: string; returnType: Observable<AjaxResponse<any>> }
  /** @subcategory run observable on each subscription */
  | { name: "defer"; description: string; returnType: Observable<any> }
  /** @subcategory conditional logic */
  | { name: "iif"; description: string; returnType: Observable<any> }
  /** @subcategory error handling */
  | { name: "throwError"; description: string; returnType: Observable<never> };
  
// export type CreationStrategy =
//   | { name: "timer"; description: string; returnType: Observable<number> }
//   | { name: "from"; description: string; returnType: Observable<any> }
//   | { name: "of"; description: string; returnType: Observable<any> }
//   | { name: "interval"; description: string; returnType: Observable<number> }
//   | { name: "fromEvent"; description: string; returnType: Observable<any> }
//   | { name: "ajax"; description: string; returnType: Observable<AjaxResponse<any>> }
//   | { name: "defer"; description: string; returnType: Observable<any> }
//   | { name: "iif"; description: string; returnType: Observable<any> }
//   | { name: "throwError"; description: string; returnType: Observable<never> };

// CreateWith function that maps the strategy to the correct return type
export function createWith<K extends CreationStrategy["name"]>(
  strategy: K,
  ...args: any[]
): CreationStrategyReturnType<K> {
  switch (strategy) {
    case "timer":
      return timer(args[0], args[1]) as CreationStrategyReturnType<K>;
    case "from":
      return from(args[0]) as CreationStrategyReturnType<K>;
    case "of":
      return of(...args) as CreationStrategyReturnType<K>;
    case "fromEvent":
      return fromEvent(args[0], args[1]) as CreationStrategyReturnType<K>;
    case "interval":
      return interval(args[0]) as CreationStrategyReturnType<K>;
    case "ajax":
      return ajax(args[0]) as CreationStrategyReturnType<K>;
    case "defer":
      return defer(() => args[0]()) as CreationStrategyReturnType<K>;
    case "iif":
      return iif(args[0], args[1], args[2]) as CreationStrategyReturnType<K>;
    case "throwError":
      return throwError(args[0]) as CreationStrategyReturnType<K>;
    default:
      throw new Error(`Unknown strategy: ${strategy}`);
  }
}
