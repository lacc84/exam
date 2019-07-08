// let readlinesync = require('readline-sync');
// m = readlinesync.keyin();
// n = readlinesync.keyin();
const generate2d = (n, m) => {
  let arr = new Array(n);
  let j = 0;
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
    arr[i] = 2 ** j;
    j++;
  }
  return arr;
  // m = readlinesync.keyin();
  // n = readlinesync.keyin();
};

// readlinesync = readlinesync.keyin('Kérem az első paramétert', m);
// readlinesync = readlinesync.keyin('Kérem a második paramétert', n);
console.log(generate2d(5, 5));
