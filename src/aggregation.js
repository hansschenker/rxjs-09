"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creation_1 = require("./creation");
const nbrs = [1, 2, 3, 4, 5];
const nbrs$ = (0, creation_1.createWith)("from", nbrs);
nbrs$.subscribe(console.log);
