import { delay, Observable, throwError, of, OperatorFunction } from "rxjs";
import { errorWith } from "./errorhandling";

const catchError$ = errorWith("catchError", (err: any) =>
  of("Fallback")
) as unknown as OperatorFunction<never, unknown>;
throwError(new Error("Something went wrong!"))
  .pipe(catchError$)
  .subscribe(console.log);
// Output: Fallback
//retry: Retry the source Observable a specified number of times.

const retry$ = errorWith("retry", 3) as unknown as OperatorFunction<
  never,
  unknown
>;
throwError(new Error("Something went wrong!"))
  .pipe(retry$)
  .subscribe({
    error: (err: any) => console.log(err.message),
  });

// Output (after 3 retries): Retrying...
//retryWhen: Retry the source Observable based on a custom retry strategy.

// const retryWhen$ = errorWith('retryWhen', (errors: Observable<any>) => errors.pipe(delay(1000))) as OperatorFunction<never, unknown>;
// retryWhen$.subscribe({
//   error: (err:any) => console.log(err.message),
// });
// // Output: Retrying after a delay...
// //throwError: Emit an error Observable.
const retryWhen$ = errorWith("retryWhen", (errors: Observable<any>) =>
  errors.pipe(delay(1000))
) as Observable<unknown>;
retryWhen$.subscribe({
  error: (err: any) => console.log(err.message),
});

const throwError$ = errorWith(
  "throwError",
  new Error("Something went wrong!")
) as Observable<unknown>;

throwError$.subscribe({
  error: (err: any) => console.log(err.message),
});
