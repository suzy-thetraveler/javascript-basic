const suzy = {
  name: 'suzy',
  job: 'software-engineer',
  eat: () => {
    console.log('eat');
  },
};

const json = JSON.stringify(suzy);
console.log(suzy);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);
