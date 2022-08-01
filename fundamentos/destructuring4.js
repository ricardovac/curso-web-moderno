function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]; // cara burro do curso, inverteu desnecessariamente. era só inverter no parametro;
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

// o valor padrão sera 0 e 1000. como dado no parametro.
// Valores rondomicos de 40 a 50.
console.log(rand([50, 40]));
