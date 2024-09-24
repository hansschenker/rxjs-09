import { interval, of } from "rxjs";
import { filterWith } from "./filtering";


// throttle:
const throttle$ = filterWith("throttle", (x: number) => interval(1000));
throttle$(of(1, 2, 3, 4)).subscribe(console.log);

// debounceTime:
const debounceTime$ = filterWith("debounceTime", 500);
debounceTime$(of(1, 2, 3, 4)).subscribe(console.log);

// sampleTime:

const sampleTime$ = filterWith("sampleTime", 2000);
sampleTime$(of(1, 2, 3, 4)).subscribe(console.log);
