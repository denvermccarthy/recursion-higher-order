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
console.log(
    'every',
    array.everyCus((x) => typeof x === 'number')
);
console.log(
    'every',
    array.everyCus((x) => typeof x !== 'number')
);
console.log(
    'every',
    array.everyCus((x) => x > 2)
);
console.log(
    'some',
    array.someCus((x) => typeof x === 'number')
);
console.log(
    'some',
    array.someCus((x) => typeof x !== 'number')
);
console.log(
    'some',
    array.someCus((x) => x > 2)
);
console.log(
    'some',
    array.someCus((x) => x > 40)
);
