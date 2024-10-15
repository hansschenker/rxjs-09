import { Observable, ConnectableObservable } from 'rxjs';
export type BroadcastType = "multicast" | "publish" | "publishBehavior" | "publishReplay" | "share";
export declare function broadcastWith<T>(type: BroadcastType, subjectOrValue?: any): (source$: Observable<T>) => Observable<T> | ConnectableObservable<T>;
//# sourceMappingURL=multicasting.d.ts.map