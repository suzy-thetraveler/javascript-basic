function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('There is no Orange'));
}

// 바나나와 사과를 같이 가지고 오기
{
  /*
getBanana() //
  .then(console.log)
  .then(getApple)
  .then(console.log);

*/
}

//모범 답안
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all  병렬적으로 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]).then((fruits) =>
  console.log('all', fruits)
);

// Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]).then((fruits) =>
  console.log('race', fruits)
);

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all', fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settled', fruits))
  .catch(console.log);
