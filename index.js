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
}
const array = new Arr([1, 2, 3, 4]);
