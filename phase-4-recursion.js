// Your code here
"use strict";

const fibnacci = (n) => {
  if (n <= 2) return 1;
  return fibnacci(n - 1) + fibnacci(n - 2);
};
console.log(fibnacci(10));

const deepDup = (arr) => {
  if (!(arr instanceof Array)) return arr;
  return arr.reduce((acc, el) => {
    if (el instanceof Array) {
      acc.push(deepDup(el));
    } else {
      acc.push(el);
    }
    return acc;
  }, []);
};

console.log(deepDup([1, 2, 3, 4, 5]));

const deepDup2 = (arr) => {
  if (!(arr instanceof Array)) return arr;
  return arr.map((el) => deepDup(el));
};
console.log(deepDup2([1, 2, 3, 4, 5]));

const bsearch = (arr, target) => {
  if (arr.length === 0) return -1;
  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) {
    return bsearch(arr.slice(0, mid), target);
  } else {
    const result = bsearch(arr.slice(mid + 1), target);
    return result === -1 ? -1 : result + mid + 1;
  }
};
console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

const mergesort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid));
  return merge(left, right);
};

const merge = (left, right) => {
  const merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left, right);
};
console.log(mergesort([1, 2, 3, 7, 8, 9, 4, 5, 6]));

const subsets = (arr) => {
  if (arr.length === 0) return [[]];
  const first = arr[0];
  const subs = subsets(arr.slice(1));
  const newSubs = subs.map((el) => el.concat(first));
  return subs.concat(newSubs);
};
console.log(subsets([1, 2, 3]));
