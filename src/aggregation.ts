import { Observable, count, max, min, reduce, scan } from "rxjs";



export type AggregateType = "count" | "max" | "reduce" | "scan";

export function aggregateWith(type: AggregateType, ...args: any[]): <T>(source$: Observable<T>) => Observable<any> {
  switch (type) {
    case "count":
      return (source$) => source$.pipe(count());
    case "max":
      const compareFn = args[0];
      return (source$) => source$.pipe(max(compareFn));
    case "reduce":
      const [accumulator, seed] = args;
      return (source$) => source$.pipe(reduce(accumulator, seed));
    case "scan":
      const [scanAccumulator, scanSeed] = args;
      return (source$) => source$.pipe(scan(scanAccumulator, scanSeed));
    default:
      throw new Error(`Unknown aggregate type: ${type}`);
  }
}



// export type AggregationStrategyReturnType<
//   K extends string,
//   T,
//   R = any
// > = K extends "count"
//   ? Observable<number>
//   : K extends "max"
//   ? Observable<T>
//   : K extends "min"
//   ? Observable<T>
//   : K extends "reduce"
//   ? Observable<R>
//   : K extends "scan"
//   ? Observable<R>
//   : never;
  

// export function aggregateWith<K extends string, T, R>(
//   strategy: K,
//   ...args: any[]
// ): AggregationStrategyReturnType<K, T, R> {
//   switch (strategy) {
//     case "count":
//       return count() as unknown as AggregationStrategyReturnType<K, T, R>;
//     case "max":
//       return max(args[0]) as  unknown as AggregationStrategyReturnType<K, T, R>;
//     case "min":
//       return min(args[0]) as  unknown as AggregationStrategyReturnType<K, T, R>;
//     case "reduce":
//       return reduce(args[0], args[1]) as  unknown as AggregationStrategyReturnType<K, T, R>;
//     case "scan":
//       return scan(args[0], args[1]) as  unknown as AggregationStrategyReturnType<K, T, R>;
//     default:
//       throw new Error(`Unknown strategy: ${strategy}`);
//   }
// }
