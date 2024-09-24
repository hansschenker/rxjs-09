import { map, scan, Observable } from "rxjs";
import { pluck, mapTo, mergeMap, concatMap, switchMap, exhaustMap } from "rxjs/operators";


export type TransformationStrategyReturnType<K extends string, T, R = any> =
  K extends "map" ? Observable<R> :
  K extends "scan" ? Observable<R> :
  K extends "pluck" ? Observable<any> :
  K extends "mapTo" ? Observable<R> :
  K extends "mergeMap" ? Observable<R> :
  K extends "concatMap" ? Observable<R> :
  K extends "switchMap" ? Observable<R> :
  K extends "exhaustMap" ? Observable<R> :
  never;

  export function mapWith<K extends string, T, R>(
    strategy: K,
    ...args: any[]
  ): TransformationStrategyReturnType<K, T, R> {
    switch (strategy) {
      case "map":
        return map(args[0]) as unknown as TransformationStrategyReturnType<K, T, R>;
      case "scan":
        return scan(args[0], args[1]) as unknown as TransformationStrategyReturnType<K, T, R>;
      case "pluck":
        return pluck(...args) as unknown as TransformationStrategyReturnType<K, T, R>;
      case "mapTo":
        return mapTo(args[0]) as unknown as TransformationStrategyReturnType<K, T, R>;
      case "mergeMap":
        return mergeMap(args[0]) as unknown as TransformationStrategyReturnType<K, T, R>;
      case "concatMap":
        return concatMap(args[0]) as unknown as TransformationStrategyReturnType<K, T, R>;
      case "switchMap":
        return switchMap(args[0]) as unknown as TransformationStrategyReturnType<K, T, R>;
      case "exhaustMap":
        return exhaustMap(args[0]) as unknown as TransformationStrategyReturnType<K, T, R>;
      default:
        throw new Error(`Unknown strategy: ${strategy}`);
    }
}
