import { Observable } from "rxjs";
export type TransformationStrategyReturnType<K extends string, T, R = any> = K extends "map" ? Observable<R> : K extends "scan" ? Observable<R> : K extends "pluck" ? Observable<any> : K extends "mapTo" ? Observable<R> : K extends "mergeMap" ? Observable<R> : K extends "concatMap" ? Observable<R> : K extends "switchMap" ? Observable<R> : K extends "exhaustMap" ? Observable<R> : never;
export declare function mapWith<K extends string, T, R>(strategy: K, ...args: any[]): TransformationStrategyReturnType<K, T, R>;
//# sourceMappingURL=transformation.d.ts.map