const [a] = [10]
console.log(a);

// ignorei o 7 (n2) e n1 e n3 ficou 10 e 9.
// n5 ta indefinido e n6 = 0
const [n1, , n3, , n5, n6 = 0] = [10,7,9,8]

console.log(n1,n3,n5,n6);