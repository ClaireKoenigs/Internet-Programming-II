//m
function sum(x, y) {
    return x + y;
}
exports.a = sum; // can rename

//esm
export function sum(x, y) {
    return x + y;
}
export function diff(x, y) {
    return x - y;
}

//pretend new js file is here - import
//m
const mod = require('./d.js');
console.log(mod.a(2, 3));

//esm
import { sum } from './d.js';
console.log(sum(2, 3));

//
let position = { x: 0, y: 0 };
function movePlayer(x, y) {
    if (movePlayer.CanMove) {
        position.x += x;
        position.y += y;
    }
}
function takeDamage(damage) {
    if (!movePlayer.sheild) {
        //take damage
    }
}