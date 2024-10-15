import { Observable } from "rxjs";
export type FilteringStrategyReturnType<K extends string, T> = K extends "throttle" ? Observable<T> : K extends "throttleTime" ? Observable<T> : K extends "debounce" ? Observable<T> : K extends "debounceTime" ? Observable<T> : K extends "audit" ? Observable<T> : K extends "auditTime" ? Observable<T> : K extends "sample" ? Observable<T> : K extends "sampleTime" ? Observable<T> : never;
export type FilterType = "throttle" | "debounceTime" | "sampleTime";
export declare function filterWith(type: FilterType, value: any): <T>(source$: Observable<T>) => Observable<T>;
//# sourceMappingURL=filtering.d.ts.map