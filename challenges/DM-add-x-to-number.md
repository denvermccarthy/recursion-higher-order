DEMO: Add x to Number
---

## Challenge

Write a function `addX` that takes a number `x` and returns a function that also takes a number but returns the sum of the initial number `x` plus the new number

> **You can assume valid inputs**

## Test Cases

```js
const add5 = addX(5);
console.log(add5(10));
// 15
console.log(add5(3));
// 8

const add3 = addX(3);
console.log(add3(3));
// 6
console.log(add3(20));
// 23
```