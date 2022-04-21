{
  /* quiz 1 */
}
class Counter {
  constructor(count) {
    this.count = count;
  }
  countNum() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter(4);
counter.countNum();
counter.countNum();

//모범답안
class Counter2 {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increament() {
    this.#value++;
  }
}

const answer = new Counter2(2);
console.log(answer.value);
answer.increament();
console.log(answer.value);
