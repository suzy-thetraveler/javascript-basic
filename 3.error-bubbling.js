// Bubbling up, Propagating
function a() {
  throw new Error('error');
}

function b() {
  a();
}

function c() {
  b();
}

try {
  c();
} catch (err) {
  console.log(err);
}
