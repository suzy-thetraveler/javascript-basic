//Nullish Coalescing Operator
//ES11
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''

let num = 0;
console.log(num || -1);
console.log(num ?? -1);

//Optional Chaning
let person = { name: { first: 'suzy', last: 'lee' } };
console.log(person?.name?.first);

//Logical 연산자
// && 조건이 truthy일 때, 무언가를 해야할 경우
// || 조건이 falshy일 때, 무언가를 해야할 경우
const representative = '';
console.log(representative || person.name);
console.log(representative && person.last);
