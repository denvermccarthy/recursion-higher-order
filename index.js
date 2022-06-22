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
