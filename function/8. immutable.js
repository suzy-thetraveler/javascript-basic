// 외부에서 전달하는 값을 절대로 내부적으로 변경하면 안된다 그건 💩
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 변경한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사(메모리주소)

function display(num) {
  num = 5; //❌
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = "Bob";
  console.log(obj);
}

const ellie = { name: "ellie" };
// displayObj(ellie);
console.log(ellie);

function changeName(obj) {
  return { ...obj, name: "Bob" };
}
console.log(changeName(ellie));
console.log(ellie);
