import { Observable } from "rxjs";
import { AjaxResponse } from "rxjs/ajax";
export type CreationStrategyReturnType<K extends string> = K extends "timer" ? Observable<number> : K extends "range" ? Observable<number> : K extends "generate" ? Observable<number> : K extends "from" ? Observable<any> : K extends "of" ? Observable<any> : K extends "interval" ? Observable<number> : K extends "fromEvent" ? Observable<any> : K extends "ajax" ? Observable<AjaxResponse<any>> : K extends "defer" ? Observable<any> : K extends "iif" ? Observable<any> : K extends "throwError" ? Observable<never> : never;
export type CreationStrategy = 
/** @subcategory generate number values */
{
    name: "timer";
    description: string;
    returnType: Observable<number>;
} | {
    name: "range";
    description: string;
    returnType: Observable<number>;
} | {
    name: "generate";
    description: string;
    returnType: Observable<number>;
}
/** @subcategory values from simple values, objects or arrays */
 | {
    name: "from";
    description: string;
    returnType: Observable<any>;
}
/** @subcategory values from simple values, objects or arrays */
 | {
    name: "of";
    description: string;
    returnType: Observable<any>;
}
/** @subcategory generate number values */
 | {
    name: "interval";
    description: string;
    returnType: Observable<number>;
}
/** @subcategory handling DOM events */
 | {
    name: "fromEvent";
    description: string;
    returnType: Observable<any>;
}
/** @subcategory web context */
 | {
    name: "ajax";
    description: string;
    returnType: Observable<AjaxResponse<any>>;
}
/** @subcategory run observable on each subscription */
 | {
    name: "defer";
    description: string;
    returnType: Observable<any>;
}
/** @subcategory conditional logic */
 | {
    name: "iif";
    description: string;
    returnType: Observable<any>;
}
/** @subcategory error handling */
 | {
    name: "throwError";
    description: string;
    returnType: Observable<never>;
};
/**
 * CreateWith function that maps the strategy to the correct return type.
 *
 * @template K
 * @param {K} strategy - The creation strategy name.
 * @param {...any[]} args - The arguments for the creation strategy.
 * @returns {CreationStrategyReturnType<K>} The observable created by the specified strategy.
 */
export declare function createWith<K extends CreationStrategy["name"]>(strategy: K, ...args: any[]): CreationStrategyReturnType<K>;
//# sourceMappingURL=creation.d.ts.map