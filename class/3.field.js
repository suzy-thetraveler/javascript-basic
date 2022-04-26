// Access Modifier 접근제어자 -capsulize
// private(#), public(default), protected
class Fruit {
  #name;
  #emoji;
  #type = 'fruit';

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
