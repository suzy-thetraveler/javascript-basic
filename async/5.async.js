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
async function getFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

getFruits() //
  .then(console.log);
