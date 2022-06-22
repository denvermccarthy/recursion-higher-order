// import { testEvery, testSome } from "./tests";

class Arr {
    array;
    constructor(input) {
        this.array = [...input];
    }
    forEachCus(func) {
        for (let i = 0; i < this.array.length; i++) {
            func(this.array[i]);
        }
    }
    mapCus(func) {
        const newArr = [];
        for (let i = 0; i < this.array.length; i++) {
            const value = func(this.array[i]);
            newArr.push(value);
        }
        return newArr;
    }
    filterCus(func) {
        const newArr = [];
        for (let i = 0; i < this.array.length; i++) {
            const item = this.array[i];
            const bool = func(item);
            if (bool) {
                newArr.push(item);
            }
        }
        return newArr;
    }
    everyCus(func) {
        const newArr = [];
        for (let i = 0; i < this.array.length; i++) {
            const item = this.array[i];
            const bool = func(item);
            if (bool) {
                newArr.push(item);
            }
        }
        return newArr.length === this.array.length;
    }
    someCus(func) {
        for (let i = 0; i < this.array.length; i++) {
            const item = this.array[i];
            const bool = func(item);
            if (bool) return true;
        }
        return false;
    }
}
const array = new Arr([1, 2, 3, 4]);
// testEvery();
// testSome();

const fib = (n) => {
    if (n < 2) {
        return n;
    }
    return fib(n - 2) + fib(n - 1);
};
console.log(fib(37));
//attempted memoization solution, it works, but it is much much slower. Any idea why?
// if (n < 2) {
//   return n;
// }
// const cache = {};
// if (cache[n]) {
//   return cache[n];
// }

// cache[n] = fib(n - 2) + fib(n - 1);
// return cache[n];

const addPunc = (punc) => (sentence) => sentence + punc;

const addExcitement = addPunc('!!!');
console.log(addExcitement('Hello World'));
// Hello World!!!
const addUnsure = addPunc('?!?');
console.log(addUnsure('Hello World'));
// Hello World?!?
console.log(addUnsure('Pokemon, catch em all'));
// Pokemon, catch em all?!?

const addFirst =
    (...item) =>
    (arr) => {
        arr.unshift(...item);
        return arr;
    };
const addOrange = addFirst('orange', 'apple');
console.log(addOrange(['red', 'blue', 'green']));
// [orange,red,blue,green]
console.log(addOrange(['blue', 'blue', 'blue']));
// [orange,blue,blue,blue]
const addCat = addFirst('cat');
console.log(addOrange(['dog', 'bird', 'lizard']));
// [cat,dog,bird,lizard]
console.log(addOrange(['lizard', 'donkey', 'whale']));
// [cat,lizard,donkey,whale]

function largestEven(nums) {
    let largestNum = null;
    //loop over each item in the array, check if even, check if number is greater than current largest
    nums.forEach((num) => {
        if (num % 2 == 0) {
            if (!largestNum || largestNum <= num) {
                largestNum = num;
            }
        }
    });
    // => largest number in an array
    return typeof largestNum === 'number' ? largestNum : -1;
}

console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]));
//➞ 10

console.log(largestEven([1, 3, 5, 7]));
//➞ -1

console.log(largestEven([0, 19, 18973623]));
//➞ 0

function sum(n) {
    let sum = 0;
    function recursion(num) {
        if (num > 0) {
            sum += num;
            return recursion(num - 1);
        }
        return sum;
    }
    return recursion(n);
}
console.log('sum(5)', sum(5));

function repeat(txt, n) {
    if (n < 1) {
        return txt;
    }
    return repeat(txt, n - 1) + txt;
}
console.log('repeat', repeat('nice ', 4));
