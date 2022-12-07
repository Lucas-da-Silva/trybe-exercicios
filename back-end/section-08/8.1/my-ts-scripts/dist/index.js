"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const scripts = [
    { name: "Convert length", script: "./length" },
    { name: "Convert mass", script: "./mass" },
    { name: "Convert capacity", script: "./capacity" },
    { name: "Convert area", script: "./area" },
    { name: "Convert volume", script: "./volume" }
];
const scriptNames = scripts.map(item => item.name);
const choice = (0, readline_sync_1.keyInSelect)(scriptNames, "Choose a number to run the unit conversion script");
require(scripts[choice].script);
