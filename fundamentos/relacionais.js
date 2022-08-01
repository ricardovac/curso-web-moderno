console.log('1' == 1);
console.log('1' === 1); // string e number sao diferentes. (estritamente igual)
console.log('3' != 3); // não leva em consideração o tipo.
console.log('3' !== 3); // string e number sao diferentes

const d1 = new Date(0);
const d2 = new Date(0);
console.log(d1 === d2);
console.log(d1 == d2);
console.log(d1.getTime == d2.getTime);
