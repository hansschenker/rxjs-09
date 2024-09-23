import { Observable, catchError, of, retry, retryWhen, throwError } from "rxjs";



export type ErrorHandlingStrategy<T> = {
  name: 'catchError' | 'retry' | 'retryWhen' | 'throwError';
  returnType: Observable<T>;
};

export function errorWith<T>(
  strategy: ErrorHandlingStrategy<T>["name"],
  ...args: any[]
): Observable<T> {
  switch (strategy) {
    case "catchError":
      return of(null).pipe(catchError(args[0])) as Observable<T>;
    case "retry":
      return of(null).pipe(retry(args[0])) as Observable<T>;
    case "retryWhen":
      return of(null).pipe(retryWhen(args[0])) as Observable<T>;
    case "throwError":
      return throwError(args[0]) as Observable<T>;
    default:
      throw new Error(`Unknown strategy: ${strategy}`);
  }
}

// export type ErrorHandlingStrategy<T> =
//   | {
//       name: "catchError";
//       description: "Catches errors and returns an Observable";
//       returnType: Observable<T>;
//     }
//   | {
//       name: "retry";
//       description: "Retries the source Observable a specified number of times, default 1";
//       returnType: Observable<T>;
//     }
//   | {
//       name: "retryWhen";
//       description: "Retries the source Observable based on a custom retry strategy.";
//       returnType: Observable<T>;
//     }
//   | {
//       name: "throwError";
//       description: "Creates an Observable that emits an error.";
//       returnType: Observable<never>;
//     };

// export function errorWith<T>(
//   strategy: ErrorHandlingStrategy<T>["name"],
//   ...args: any[]
// ): ErrorHandlingStrategy<T>["returnType"] {
//   switch (strategy) {
//     case "catchError":
//       return catchError(
//         args[0]
//       ) as unknown as ErrorHandlingStrategy<T>["returnType"];
//     case "retry":
//       return retry(
//         args[0]
//       ) as unknown as ErrorHandlingStrategy<T>["returnType"];
//     case "retryWhen":
//       return retryWhen(
//         args[0]
//       ) as unknown as ErrorHandlingStrategy<T>["returnType"];
//     case "throwError":
//       return throwError(
//         args[0]
//       ) as unknown as ErrorHandlingStrategy<T>["returnType"];
//     default:
//       throw new Error(`Unknown strategy: ${strategy}`);
//   }
// }
