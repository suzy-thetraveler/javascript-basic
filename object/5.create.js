// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`); //객체안에서 쓸 땐 항상 this를 붙이는걸 잊지말기!
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`); //객체안에서 쓸 땐 항상 this를 붙이는걸 잊지말기!
//   },
// };

function Fruit(name, emoji) {
  //생성자의 함수 변수명은 첫번째는 무조건 대문자로 시작
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  //생성자 함수에서는 this가 자동으로 return됌, return this;
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
