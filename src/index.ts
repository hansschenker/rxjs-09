import {
  delay,
  Observable,
  throwError,
  of,
  OperatorFunction,
  take,
} from "rxjs";
import { errorWith } from "./errorhandling";
import { createWith } from "./creation";

// const catchError$ = errorWith("catchError", (err: any) =>
//   of("Fallback")
// ) as unknown as OperatorFunction<never, unknown>;
// throwError(new Error("Something went wrong!"))
//   .pipe(catchError$)
//   .subscribe(console.log);
// // Output: Fallback
// //retry: Retry the source Observable a specified number of times.

// const retry$ = errorWith("retry", 3) as unknown as OperatorFunction<
//   never,
//   unknown
// >;
// throwError(new Error("Something went wrong!"))
//   .pipe(retry$)
//   .subscribe({
//     error: (err: any) => console.log(err.message),
//   });

// Output (after 3 retries): Retrying...
//retryWhen: Retry the source Observable based on a custom retry strategy.

// const retryWhen$ = errorWith('retryWhen', (errors: Observable<any>) => errors.pipe(delay(1000))) as OperatorFunction<never, unknown>;
// retryWhen$.subscribe({
//   error: (err:any) => console.log(err.message),
// });
// // Output: Retrying after a delay...
// //throwError: Emit an error Observable.
// const retryWhen$ = errorWith("retryWhen", (errors: Observable<any>) =>
//   errors.pipe(delay(1000))
// ) as Observable<unknown>;
// retryWhen$.subscribe({
//   error: (err: any) => console.log(err.message),
// });

// const throwError$ = errorWith(
//   "throwError",
//   new Error("Something went wrong!")
// ) as Observable<unknown>;

// throwError$.subscribe({
//   error: (err: any) => console.log(err.message),
// });

// const of$ = createWith("of", "Hello, world!") as Observable<string>;
// of$.subscribe(console.log);

// const timer$ = createWith("timer", 1000, 1000) as Observable<number>
// timer$.pipe(take(5)).subscribe(console.log)

// const from$ = createWith("from", [1, 2, 3]) as Observable<number>;
// from$.subscribe(console.log);

// const clicks$ = createWith( "fromEvent", document, "click").subscribe(console.log)

// const timer$ = createWith("timer", 1000, 1000) as Observable<number>;
// timer$.pipe(take(5)).subscribe(console.log);

// const interval$ = createWith("interval", 1000) as Observable<number>;
// interval$.pipe(take(5)).subscribe(console.log);

// const ajax$ = createWith("ajax", "https://jsonplaceholder.typicode.com/users/1") as Observable<any>;
// ajax$.subscribe(console.log);

// const defer$ = createWith("defer", () => of(Date.now())) as Observable<string>;
// defer$.subscribe(console.log);
// const defer$1 = createWith("defer", () => of(Date.now())) as Observable<string>;
// defer$1.subscribe(console.log);

// const iif$ = createWith("iif", () => true, of("Hello, world!"), of("Goodbye, world!")) as Observable<string>;
// iif$.subscribe(console.log);

// const throwError$ = createWith("throwError", new Error("Something went wrong!")) as Observable<never>;
// throwError$.subscribe({
//   error: (err: any) => console.log(err.message),
// });
