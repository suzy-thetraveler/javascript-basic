const x = 0;
const y = 0;
const coordinate = { x, y }; //{x: x, y: y}의 축약버전!

console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

console.log(makeObj('suzy', 20));
