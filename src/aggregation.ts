import { Observable, count, max, min, reduce, scan } from "rxjs";
import { createWith } from "./creation";


const nbrs = [1, 2, 3, 4, 5];
const nbrs$ = createWith("from", nbrs);
nbrs$.subscribe(console.log);
