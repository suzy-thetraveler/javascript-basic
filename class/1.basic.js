// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수
// 2. 클래스

// 클래스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 instance이다.
const apple = new Fruit('apple', '🍎');
console.log(apple);

// obj는 그냥 객체이다!
const obj = { name: 'ellie' };
