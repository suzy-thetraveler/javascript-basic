function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg}=> 🍳`);
}

function getChicken() {
  return Promise.resolve(`🌴 => 🐓`);
}

async function fetchChicken() {
  const chicken = await getChicken();
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  return friedEgg;
}

fetchChicken().then(console.log);
