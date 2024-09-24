import { of, Subject, ConnectableObservable } from 'rxjs';
import { broadcastWith } from "./multicasting";

// multicast:
const multicast$ = broadcastWith('multicast', new Subject<number>());
multicast$(of(1, 2, 3)).subscribe(console.log);

// publish:
const publish$ = broadcastWith('publish');
const connectable$ = publish$(of(1, 2, 3)) as ConnectableObservable<number>;
connectable$.connect(); // Triggers the Observable

// publishBehavior:
const publishBehavior$ = broadcastWith('publishBehavior', 0); // Initial value is 0
publishBehavior$(of(1, 2, 3)).subscribe(console.log);

// publishReplay:
const publishReplay$ = broadcastWith('publishReplay', 2); // Buffer size is 2
publishReplay$(of(1, 2, 3)).subscribe(console.log);

// share:
const share$ = broadcastWith('share');
share$(of(1, 2, 3)).subscribe(console.log);