import { combineLatest, concat, forkJoin, merge, Observable, race, zip, window, windowCount,windowTime,windowToggle, windowWhen } from "rxjs";


export type CombinationStrategyReturnType<K extends string, T, R = any> =
  K extends "combineLatest" ? Observable<R[]> :
  K extends "concat" ? Observable<R> :
  K extends "merge" ? Observable<R> :
  K extends "forkJoin" ? Observable<R[]> :
  K extends "race" ? Observable<R> :
  K extends "zip" ? Observable<R[]> :
  K extends "window" ? Observable<Observable<T>> :
  K extends "windowCount" ? Observable<Observable<T>> :
  K extends "windowTime" ? Observable<Observable<T>> :
  K extends "windowToggle" ? Observable<Observable<T>> :
  K extends "windowWhen" ? Observable<Observable<T>> :
  never;

  export function combineWith<K extends string, T, R>(
    strategy: K,
    ...args: any[]
  ): CombinationStrategyReturnType<K, T, R> {
    switch (strategy) {
      case "combineLatest":
        return combineLatest(args[0]) as CombinationStrategyReturnType<K, T, R>;
      case "concat":
        return concat(...args) as CombinationStrategyReturnType<K, T, R>;
      case "merge":
        return merge(...args) as CombinationStrategyReturnType<K, T, R>;
      case "forkJoin":
        return forkJoin(args[0]) as CombinationStrategyReturnType<K, T, R>;
      case "race":
        return race(...args) as CombinationStrategyReturnType<K, T, R>;
      case "zip":
        return zip(...args) as CombinationStrategyReturnType<K, T, R>;
      case "window":
        return window(args[0]) as unknown as CombinationStrategyReturnType<K, T, R>;
      case "windowCount":
        return windowCount(args[0], args[1]) as unknown as CombinationStrategyReturnType<K, T, R>;
      case "windowTime":
        return windowTime(args[0]) as unknown as CombinationStrategyReturnType<K, T, R>;
      case "windowToggle":
        return windowToggle(args[0], args[1]) as unknown as CombinationStrategyReturnType<K, T, R>;
      case "windowWhen":
        return windowWhen(args[0]) as unknown as CombinationStrategyReturnType<K, T, R>;
      default:
        throw new Error(`Unknown strategy: ${strategy}`);
    }
  }
  