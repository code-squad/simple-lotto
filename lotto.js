const a = [];

for (var i = 1; i <= 45; i++) {
  a.push(i);
}

function shuffle() {
  for (let i = 44; i >= 2; i--) {
    const j = (parseInt(Math.random() * 4321) % i);
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}

function lotto() {
  shuffle();
  const l = a.slice(0, 6);
  l.sort((a, b) => a - b);
  return l;
}

module.exports.lotto = lotto;
