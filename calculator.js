const add = (a, b) => {
  return a + b;
}
;
const kiv = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const muvelet = (a, b, t) => {
  return t(a, b);
};

console.log(muvelet(2, 2, add));
console.log(muvelet(2, 2, kiv));
console.log(muvelet(2, 2, mul));
console.log(muvelet(2, 2, div));

module.exports {
    oszz: add,
    kiv: kiv,
    div: div,
    mul: mul,
    muvelet: muvelet,
};