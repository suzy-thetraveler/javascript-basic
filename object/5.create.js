// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: ๐`); //๊ฐ์ฒด์์์ ์ธ ๋ ํญ์ this๋ฅผ ๋ถ์ด๋๊ฑธ ์์ง๋ง๊ธฐ!
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: ๐`); //๊ฐ์ฒด์์์ ์ธ ๋ ํญ์ this๋ฅผ ๋ถ์ด๋๊ฑธ ์์ง๋ง๊ธฐ!
//   },
// };

function Fruit(name, emoji) {
  //์์ฑ์์ ํจ์ ๋ณ์๋ช์ ์ฒซ๋ฒ์งธ๋ ๋ฌด์กฐ๊ฑด ๋๋ฌธ์๋ก ์์
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  //์์ฑ์ ํจ์์์๋ this๊ฐ ์๋์ผ๋ก return๋, return this;
}

const apple = new Fruit('apple', '๐');
const orange = new Fruit('orange', '๐');

console.log(apple);
console.log(orange);
