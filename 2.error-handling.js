// try catch finally
function readFile(path) {
  throw new Error('can not find the path');
  return 'Name of File';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error);
    content = 'basic context';
  } finally {
    console.log('whether sucess or fail, resource is cleared');
  }
  const result = 'hi' + content;
  return result;
}

const result = processFile('path');
console.log(result);
