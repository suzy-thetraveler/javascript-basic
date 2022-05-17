// 1번 문제
let fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === '🍓') {
    fruits[i] = '🥝';
  }
}
console.log(fruits);

// 2번 문제
function countFruits(arr, fruit) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == fruit) {
      count++;
    }
  }
  return count;
}
console.log(countFruits(fruits, '🥝'));

// 3번 문제

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
console.log(commonArray(fruits, ['🍌', '🍓', '🍇', '🥝']));

// 1. 오답노트 , 배열안의 값을 바꾸면 안된다 안돼!!
const arrayList = ['🍌', '🍓', '🍇', '🍓'];
function replace(array, from, to) {
  let arr = Array.from(array);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'from') arr[i] = to;
  }
  return arr;
}
const result = replace(arrayList, '🍓', '🥝');
console.log(result);
