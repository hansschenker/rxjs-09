"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenWith = void 0;
const rxjs_1 = require("rxjs");
function flattenWith(type, project) {
    switch (type) {
        case "switchMap":
            if (!project)
                throw new Error(`Project function is required for ${type}`);
            return (source$) => source$.pipe((0, rxjs_1.switchMap)(project));
        case "mergeMap":
            if (!project)
                throw new Error(`Project function is required for ${type}`);
            return (source$) => source$.pipe((0, rxjs_1.mergeMap)(project));
        case "concatMap":
            if (!project)
                throw new Error(`Project function is required for ${type}`);
            return (source$) => source$.pipe((0, rxjs_1.concatMap)(project));
        case "exhaustMap":
            if (!project)
                throw new Error(`Project function is required for ${type}`);
            return (source$) => source$.pipe((0, rxjs_1.exhaustMap)(project));
        case "mergeAll":
            return (source$) => source$.pipe((0, rxjs_1.mergeAll)());
        case "concatAll":
            return (source$) => source$.pipe((0, rxjs_1.concatAll)());
        case "exhaustAll":
            return (source$) => source$.pipe((0, rxjs_1.exhaustAll)());
        default:
            throw new Error(`Unknown flatten type: ${type}`);
    }
}
exports.flattenWith = flattenWith;
// export function flattenWith<T, R>(type: FlattenType, project?: (value: T) => ObservableInput<R>): (source$: Observable<T>) => Observable<R> {
//     switch (type) {
//       case "switchMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(switchMap(project));
//       case "mergeMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(mergeMap(project));
//       case "concatMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(concatMap(project));
//       case "exhaustMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(exhaustMap(project));
//       case "mergeAll":
//         return (source$) => source$.pipe(mergeAll());
//       case "concatAll":
//         return (source$) => source$.pipe(concatAll());
//       case "exhaustAll":
//         return (source$) => source$.pipe(exhaustAll());
//       default:
//         throw new Error(`Unknown flatten type: ${type}`);
//     }
//   }
// export function flattenWith<T extends ObservableInput<any>>(type: FlattenType, project?: (value: any) => Observable<any>): (source$: Observable<T>) => Observable<any> {
//     switch (type) {
//       case "switchMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(switchMap(project));
//       case "mergeMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(mergeMap(project));
//       case "concatMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(concatMap(project));
//       case "exhaustMap":
//         if (!project) throw new Error(`Project function is required for ${type}`);
//         return (source$) => source$.pipe(exhaustMap(project));
//       case "mergeAll":
//         return (source$) => source$.pipe(mergeAll());
//       case "concatAll":
//         return (source$) => source$.pipe(concatAll());
//       case "exhaustAll":
//         return (source$) => source$.pipe(exhaustAll());
//       default:
//         throw new Error(`Unknown flatten type: ${type}`);
//     }
//   }
// export type FlatteningStrategyReturnType<K extends string, T, R = any> =
//   K extends "switchMap" ? Observable<R> :
//   K extends "mergeMap" ? Observable<R> :
//   K extends "concatMap" ? Observable<R> :
//   K extends "exhaustMap" ? Observable<R> :
//   K extends "switchMapTo" ? Observable<R> :
//   K extends "concatAll" ? Observable<R> :
//   K extends "mergeAll" ? Observable<R> :
//   K extends "exhaustAll" ? Observable<R> :
//   never;
// export function flattenWith<K extends string, T, R>(
//   strategy: K,
//   ...args: any[]
// ): FlatteningStrategyReturnType<K, T, R> {
//   switch (strategy) {
//     case "switchMap":
//       return switchMap(args[0]) as unknown as FlatteningStrategyReturnType<K, T, R>;
//     case "mergeMap":
//       return mergeMap(args[0]) as  unknown as FlatteningStrategyReturnType<K, T, R>;
//     case "concatMap":
//       return concatMap(args[0]) as  unknown as FlatteningStrategyReturnType<K, T, R>;
//     case "exhaustMap":
//       return exhaustMap(args[0]) as  unknown as FlatteningStrategyReturnType<K, T, R>;
//     case "switchMapTo":
//       return switchMapTo(args[0]) as  unknown as FlatteningStrategyReturnType<K, T, R>;
//     case "mergeAll":
//       return mergeAll(args[0]) as  unknown as FlatteningStrategyReturnType<K, T, R>;
//     case "concatAll":
//       return concatAll() as  unknown as FlatteningStrategyReturnType<K, T, R>;
//     case "exhaustAll":
//       return exhaustAll() as  unknown as FlatteningStrategyReturnType<K, T, R>;
//     default:
//       throw new Error(`Unknown strategy: ${strategy}`);
//   }
// }
