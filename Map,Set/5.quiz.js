// 1λ² λ¬Έμ 
let fruits = ['π', 'π', 'π', 'π'];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === 'π') {
    fruits[i] = 'π₯';
  }
}
console.log(fruits);

// 2λ² λ¬Έμ 
function countFruits(arr, fruit) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == fruit) {
      count++;
    }
  }
  return count;
}
console.log(countFruits(fruits, 'π₯'));

// 3λ² λ¬Έμ 

function commonArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (result.includes(arr1[i])) continue;
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(commonArray(fruits, ['π', 'π', 'π', 'π₯']));

// 1. μ€λ΅λΈνΈ , λ°°μ΄μμ κ°μ λ°κΎΈλ©΄ μλλ€ μλΌ!!
const arrayList = ['π', 'π', 'π', 'π'];
function replace(array, from, to) {
  let arr = Array.from(array);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'from') arr[i] = to;
  }
  return arr;
}
const result = replace(arrayList, 'π', 'π₯');
console.log(result);
