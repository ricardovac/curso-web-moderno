function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // || = or, se qualquer um dos trablhos derem certo = comprar sorvete.
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true)); // trabalho1 = true, trabalho2 = false.
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));