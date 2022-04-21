class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eating👄');
  }
  sleep() {
    console.log('sleeping🥱');
  }
}

class Tiger extends Animal {
  hunt() {
    console.log('hunting😱');
  }
}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.sleep();
tiger.hunt();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('playing👻');
  }
  //overriding
  eat() {
    super.eat();
    console.log('puppy is eating');
  }
}
const dog = new Dog('white', 'ellie');
console.log(dog);
dog.play();
dog.eat();
