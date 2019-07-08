const calculator = require('./calculator.js');

const add = calculator.add;

const kiv = calculator.kiv;
const mul = calculator.mul;
const div = calculator.div;
const muvelet = calculator.muvelet;

console.log(muvelet(2, 2, add));
console.log(muvelet(2, 2, kiv));
console.log(muvelet(2, 2, mul));
console.log(muvelet(2, 2, div));
