// 1. feladat
// const pi = 3.14 // konstans
// let i = 4 // változó
// number:  szám
// string: sztring (karakterlánc)
// tömb: array

// 2. feladat

// 5. feladat

let index = 2;

switch (index) {
  case 1:
    console.log('Az index: 1');
    break;

  case 2:
    console.log('Az index: 2');
    break;
  default:
    console.log('Az index más');
    break;
}

const metszet = (arr1, arr2) => {
  let mtomb = [];
  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.lengt; j++) {
      if (arr1[i] = arr2[j]) {
        mtomb[j] = arr1[i];
      }
      return mtomb;
    }
  }
};
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 5];
console.log(metszet(arr1, arr2));
