console.log(soma(3, 4));
// console.log(sub(3, 4)); só teve o valor atribuido apartir da linha 10.

// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function (x, y) {
  return x - y;
};

// named function expression
const mult = function mult(x, y) {
  return x * y;
};
