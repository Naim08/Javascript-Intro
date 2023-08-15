// Your code here
"use strict";

Array.prototype.myEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    callbackFn(this[i], i, this);
  }
};

Array.prototype.myMap = function (callbackFn) {
  let newArr = [];
  this.forEach((el, i, arr) => {
    newArr.push(callbackFn(el, i, arr));
  });
  return newArr;
};
let a = [1, 2, 3, 4, 5];
console.log(a.myMap((el) => el * 2));

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue;
  if (accumulator === undefined) {
    accumulator = this[0];
  }
  this.myEach((el, i, arr) => {
    accumulator = callbackFn(accumulator, el, i, arr);
  });
  return accumulator;
};

Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue;
  let i = 0;
  if (accumulator === undefined) {
    accumulator = this[0];
    i = 1;
  }
  for (i; i < this.length; i++) {
    if (this[i] === undefined) continue;
    accumulator = callbackFn(
      accumulator,
      this[i],
      i,

      this
    );
  }
  return accumulator;
};
