function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds는 0보다 작을 수 없음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('필요한 일을 수행한다.'))
  .catch(console.error)
  .finally(() => console.log('최종적으로 무조건 호출한다.'));

//Promise와 비교하기
//   try {
//     runInDelay(console.log('hihi'), -2);
//   } catch (error) {
//     console.log(error);
//   }
