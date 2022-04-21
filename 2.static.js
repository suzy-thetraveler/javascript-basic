// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUIT = 3;
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //class level method
  static makeRandomFruit() {
    // cannot refer this in class level method
    // in use: when instance no need to refer method
    return new Fruit('banana', '🍌');
  }
  //instance level method
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

console.log(Fruit.makeRandomFruit('apple', '🍎'));
console.log(Fruit.MAX_FRUIT);
