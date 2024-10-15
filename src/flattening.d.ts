import { Observable, ObservableInput } from 'rxjs';
export type FlattenType = "switchMap" | "mergeMap" | "concatMap" | "exhaustMap" | "mergeAll" | "concatAll" | "exhaustAll";
export declare function flattenWith<T, R>(type: FlattenType, project?: (value: T) => ObservableInput<R>): (source$: Observable<T>) => Observable<any>;
//# sourceMappingURL=flattening.d.ts.map