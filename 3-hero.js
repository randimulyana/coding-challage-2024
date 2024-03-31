// Coding Challange 2024
// 3/356 day coding
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hero(bullets, dragons) {
//   return bullets / 2 >= dragons;
// }

// const hero = (bullets, dragons) => bullets / 2 >= dragons;
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

console.log(hero(10, 5));
