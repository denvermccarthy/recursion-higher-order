Implement `forEach`
---

## Rules

You can only use the following operations on the array:

Property | Example
---|---
Read element by index | `const number = arr[i]`
Set element by index | `arr[i] = arr[i + 1]`
Read array length | `for(let i = 0; i < arr.length; i++) {`
Set array length | `arr.length = arr.length - 1`

## Challenge

Write a function `forEach` that takes an array and a callback function, calling it for each item in the array.

```js
function forEach(arr, callback) {
```

> **You can assume valid inputs**

## Test Case

```js
const assets = [{ value: 3 }, { value: 4 }, { value: 6 }];
forEach(assets, obj => obj.value *= 2); // no return value
// assets is now:
// [{ value: 6 }, { value: 8 }, { value: 12 }]
```