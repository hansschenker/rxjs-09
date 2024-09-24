import {
  Observable,
  throttle,
  throttleTime,
  debounce,
  debounceTime,
  audit,
  auditTime,
  sample,
  sampleTime,
} from "rxjs";

export type FilteringStrategyReturnType<
  K extends string,
  T
> = K extends "throttle"
  ? Observable<T>
  : K extends "throttleTime"
  ? Observable<T>
  : K extends "debounce"
  ? Observable<T>
  : K extends "debounceTime"
  ? Observable<T>
  : K extends "audit"
  ? Observable<T>
  : K extends "auditTime"
  ? Observable<T>
  : K extends "sample"
  ? Observable<T>
  : K extends "sampleTime"
  ? Observable<T>
  : never;

// export function filterWith<K extends string, T>(
//   strategy: K,
//   ...args: any[]
// ): FilteringStrategyReturnType<K, T> {
//   switch (strategy) {
//     case "throttle":
//       return throttle(args[0]) as unknown as FilteringStrategyReturnType<K, T>;
//     case "throttleTime":
//       return throttleTime(args[0]) as unknown as FilteringStrategyReturnType<K,T>;
//     case "debounce":
//       return debounce(args[0]) as unknown as FilteringStrategyReturnType<K, T>;
//     case "debounceTime":
//       return debounceTime(args[0]) as unknown as FilteringStrategyReturnType<K,T>;
//     case "audit":
//       return audit(args[0]) as unknown as FilteringStrategyReturnType<K, T>;
//     case "auditTime":
//       return auditTime(args[0]) as unknown as FilteringStrategyReturnType<K, T>;
//     case "sample":
//       return sample(args[0]) as unknown as FilteringStrategyReturnType<K, T>;
//     case "sampleTime":
//       return sampleTime(args[0]) as unknown as FilteringStrategyReturnType<K,T>;
//     default:
//       throw new Error(`Unknown strategy: ${strategy}`);
//   }
// }
export type FilterType = "throttle" | "debounceTime" | "sampleTime";

export function filterWith(type: FilterType, value: any): <T>(source$: Observable<T>) => Observable<T> {
  switch (type) {
    case "throttle":
      return (source$) => source$.pipe(throttle(() => value));
    case "debounceTime":
      return (source$) => source$.pipe(debounceTime(value));
    case "sampleTime":
      return (source$) => source$.pipe(sampleTime(value));
    default:
      throw new Error(`Unknown filter type: ${type}`);
  }
}