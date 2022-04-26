{
  /* quiz 1 */
}
class Counter {
  //private field값을 만들어서 외부에서 접근하지 못하면서 쉽게 값을 찾을 수 있도록 해야함
  constructor(count) {
    this.count = count; //여기서 숫자값이 아닐때, 혹은 음수일 때에 대한 부분을 체크해야함
  }
  countNum() {
    //메소드명에 대한 부분 고민하기, 증가!이면 increment가 훨씬 자연스러움
    this.count++;
    console.log(this.count);
  }
  //값을 확인 할 수 있는 get 메서드를 만들어주면 좋음
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
