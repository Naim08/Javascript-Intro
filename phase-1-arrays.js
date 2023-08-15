// Your code here
"use strict";

Array.prototype.uniq = () => {
  let uniqArr = [];
  for (let i = 0; i < this.length; i++) {
    if (!uniqArr.includes(this[i])) {
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
};
