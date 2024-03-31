// Coding Challange 2024
// 1/356 day
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// Cara 1
// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result = result * x[i];
//   }
//   return result;
// }

// Cara 2
// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr, 1);
//   return result;
// }
// const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
const grow = (x) => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};
console.log(grow([1, 2, 3, 4]));
