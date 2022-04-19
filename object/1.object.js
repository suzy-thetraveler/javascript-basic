// Object literanl {key: value}
// new Object()
// Object.create()
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  name: 'apple',
  'hello-bye': '👋🏻', //그치만 이렇게 사용안하고 Camel : helloBye로 사용해야함. 훨씬 깔끔!
  0: 1,
  ['hello-bye']: '🍎',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name);
console.log(apple['hello-bye']);
apple['name'];

//속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

//속성 삭제
delete apple.emoji;
console.log(apple.emoji);
