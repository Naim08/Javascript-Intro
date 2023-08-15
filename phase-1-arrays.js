// Your code here
"use strict";

Array.prototype.uniq = function () {
  let uniqArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!uniqArr.includes(this[i])) {
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
};

Array.prototype.uniq = () => {
  let uniqArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!uniqArr.includes(this[i])) {
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
};

Array.prototype.twoSum = function () {
  let twoSumArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSumArr.push([i, j]);
      }
    }
  }
  return twoSumArr;
};
Array.prototype.transpose = function () {
  let transposeArr = [];
  for (let i = 0; i < this.length; i++) {
    let subArr = [];
    for (let j = 0; j < this.length; j++) {
      subArr.push(this[j][i]);
    }
    transposeArr.push(subArr);
  }
  return transposeArr;
};
