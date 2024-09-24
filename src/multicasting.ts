

import { Observable, multicast, publish, publishBehavior, publishLast, publishReplay, share, Subject, ConnectableObservable } from 'rxjs';


export type BroadcastType = "multicast" | "publish" | "publishBehavior" | "publishReplay" | "share";

export function broadcastWith<T>(type: BroadcastType, subjectOrValue?: any): (source$: Observable<T>) => Observable<T> | ConnectableObservable<T> {
    switch (type) {
      case "multicast":
        if (!(subjectOrValue instanceof Subject)) {
          throw new Error(`Subject is required for ${type}`);
        }
        return (source$) => source$.pipe(multicast(subjectOrValue)) as ConnectableObservable<T>;
      case "publish":
        return (source$) => source$.pipe(publish()) as ConnectableObservable<T>;
      case "publishBehavior":
        return (source$) => source$.pipe(publishBehavior(subjectOrValue)) as ConnectableObservable<T>;
      case "publishReplay":
        return (source$) => source$.pipe(publishReplay(subjectOrValue)) as ConnectableObservable<T>;
      case "share":
        return (source$) => source$.pipe(share());
      default:
        throw new Error(`Unknown broadcast type: ${type}`);
    }
}

// export function broadcastWith(type: BroadcastType, subjectOrValue?: any): <T>(source$: Observable<T>) => Observable<T> | ConnectableObservable<T> {
//     switch (type) {
//       case "multicast":
//         if (!(subjectOrValue instanceof Subject)) {
//           throw new Error(`Subject is required for ${type}`);
//         }
//         return (source$) => source$.pipe(multicast(subjectOrValue)) as ConnectableObservable<T>;
//       case "publish":
//         return (source$) => source$.pipe(publish()) as ConnectableObservable<T>;
//       case "publishBehavior":
//         return (source$) => source$.pipe(publishBehavior(subjectOrValue)) as ConnectableObservable<T>;
//       case "publishReplay":
//         return (source$) => source$.pipe(publishReplay(subjectOrValue)) as ConnectableObservable<T>;
//       case "share":
//         return (source$) => source$.pipe(share());
//       default:
//         throw new Error(`Unknown broadcast type: ${type}`);
//     }
//   }

// export function broadcastWith(type: BroadcastType, subjectOrValue?: any): <T>(source$: Observable<T>) => Observable<T> | ConnectableObservable<T> {
//   switch (type) {
//     case "multicast":
//       if (!(subjectOrValue instanceof Subject)) {
//         throw new Error(`Subject is required for ${type}`);
//       }
//       return (source$) => source$.pipe(multicast(subjectOrValue)) as ConnectableObservable<T>;
//     case "publish":
//       return (source$) => source$.pipe(publish()) as ConnectableObservable<T>;
//     case "publishBehavior":
//       return (source$) => source$.pipe(publishBehavior(subjectOrValue)) as ConnectableObservable<T>;
//     case "publishReplay":
//       return (source$) => source$.pipe(publishReplay(subjectOrValue)) as ConnectableObservable<T>;
//     case "share":
//       return (source$) => source$.pipe(share());
//     default:
//       throw new Error(`Unknown broadcast type: ${type}`);
//   }
// }


// export type MulticastingStrategyReturnType<K extends string, T> =
//   K extends "multicast" ? Observable<T> :
//   K extends "publish" ? Observable<T> :
//   K extends "publishBehavior" ? Observable<T> :
//   K extends "publishLast" ? Observable<T> :
//   K extends "publishReplay" ? Observable<T> :
//   K extends "share" ? Observable<T> :
//   never;

  

// export function broadcastWith<K extends string, T>(
//   strategy: K,
//   ...args: any[]
// ): MulticastingStrategyReturnType<K, T> {
//   switch (strategy) {
//     case "multicast":
//       return multicast(args[0]) as unknown as MulticastingStrategyReturnType<K, T>; // expects a Subject
//     case "publish":
//       return publish() as  unknown as MulticastingStrategyReturnType<K, T>; // returns a ConnectableObservable
//     case "publishBehavior":
//       return publishBehavior(args[0]) as  unknown as MulticastingStrategyReturnType<K, T>; // expects an initial value
//     case "publishLast":
//       return publishLast() as  unknown as MulticastingStrategyReturnType<K, T>; // no arguments, returns the last emitted value
//     case "publishReplay":
//       return publishReplay(args[0]) as  unknown as MulticastingStrategyReturnType<K, T>; // expects buffer size
//     case "share":
//       return share() as  unknown as MulticastingStrategyReturnType<K, T>; // shares a single subscription
//     default:
//       throw new Error(`Unknown strategy: ${strategy}`);
//   }
// }