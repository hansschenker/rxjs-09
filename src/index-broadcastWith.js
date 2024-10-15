"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const multicasting_1 = require("./multicasting");
// multicast:
const multicast$ = (0, multicasting_1.broadcastWith)('multicast', new rxjs_1.Subject());
multicast$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
// publish:
const publish$ = (0, multicasting_1.broadcastWith)('publish');
const connectable$ = publish$((0, rxjs_1.of)(1, 2, 3));
connectable$.connect(); // Triggers the Observable
// publishBehavior:
const publishBehavior$ = (0, multicasting_1.broadcastWith)('publishBehavior', 0); // Initial value is 0
publishBehavior$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
// publishReplay:
const publishReplay$ = (0, multicasting_1.broadcastWith)('publishReplay', 2); // Buffer size is 2
publishReplay$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
// share:
const share$ = (0, multicasting_1.broadcastWith)('share');
share$((0, rxjs_1.of)(1, 2, 3)).subscribe(console.log);
