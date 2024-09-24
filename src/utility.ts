import { Observable, tap, dematerialize, materialize, observeOn, subscribeOn, toArray, expand, delay, delayWhen, MonoTypeOperatorFunction, SchedulerLike, OperatorFunction } from 'rxjs';

export type UtilityStrategyReturnType<K extends string, T> =
  K extends "tap" ? MonoTypeOperatorFunction<T> :
  K extends "dematerialize" ? MonoTypeOperatorFunction<T> :
  K extends "materialize" ? MonoTypeOperatorFunction<any> : // Materialize converts values to Notification objects
  K extends "observeOn" ? MonoTypeOperatorFunction<T> :
  K extends "subscribeOn" ? MonoTypeOperatorFunction<T> :
  K extends "toArray" ? OperatorFunction<T, T[]> :
  K extends "expand" ? MonoTypeOperatorFunction<T> :
  K extends "delay" ? MonoTypeOperatorFunction<T> :
  K extends "delayWhen" ? MonoTypeOperatorFunction<T> :
  never;

export function helpWith<K extends string, T>(
  strategy: K,
  ...args: any[]
): UtilityStrategyReturnType<K, T> {
  switch (strategy) {
    case "tap":
      return tap(args[0]) as unknown as UtilityStrategyReturnType<K, T>; // Expects a side effect function
    case "dematerialize":
      return dematerialize() as unknown as UtilityStrategyReturnType<K, T>; // Expects no arguments
    case "materialize":
      return materialize() as unknown as UtilityStrategyReturnType<K, T>; // Expects no arguments
    case "observeOn":
      return observeOn(args[0] as unknown as SchedulerLike) as unknown as UtilityStrategyReturnType<K, T>; // Expects a scheduler
    case "subscribeOn":
      return subscribeOn(args[0] as unknown as SchedulerLike) as unknown as UtilityStrategyReturnType<K, T>; // Expects a scheduler
    case "toArray":
      return toArray() as unknown as UtilityStrategyReturnType<K, T>; // Collects all emitted values into an array
    case "expand":
      return expand(args[0]) as unknown as UtilityStrategyReturnType<K, T>; // Expects an expansion function
    case "delay":
      return delay(args[0]) as unknown as UtilityStrategyReturnType<K, T>; // Expects a delay time
    case "delayWhen":
      return delayWhen(args[0]) as unknown as UtilityStrategyReturnType<K, T>; // Expects a notifier function
    default:
      throw new Error(`Unknown strategy: ${strategy}`);
  }
}
