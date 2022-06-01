function runInDelay(callback, seconds) {
  if (seconds < 0) {
    throw new Error('0보다 작을 수 없습니다.');
    return;
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(console.log('hihi'), -2);
} catch (error) {
  console.log(error);
}
