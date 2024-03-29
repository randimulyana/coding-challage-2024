// Coding Challange 2024
// 2/356 day
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();
const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
console.log(reverseSeq(5));
