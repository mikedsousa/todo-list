// 1 - strict
"use strict";

// opa = "teste";

const opa = "teste";

//const undefined = 10;

// delete [].length;

// 2 - console.log
// Utilizar o console para verificar os valores ao decorrer do código

let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// 3 - debugger
// Utilizar o debugger no navegador para acompanhar o fluxo do código

let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
  // debugger;
}

console.log("executou o loop");

// debugger;

// 4 - tratamento de dados

function checkNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor incorreto!");
    return;
  }

  console.log("Valor correto!");
  return result;
}

// 5 - exceptions

let x = 10;

// if (x != 11) {
//   throw new Error("Valor incorreto!");
// }

// 6 - try catch

try {
  const soma = x + y
} catch (error) {
  console.log(`Erro no programa: ${error}`);
}

// 7 - finally

try {
  const value = checkNumber("sdsd")

  if (!value) {
    throw new Error("Valor inválido!");
  }
} catch(err) {
  console.log(`Erro: ${err}`);
} finally {
  console.log("Terminou o programa")
}

// 8 - assertions

function checkArray(arr) {
  if(arr.length === 0) {
    throw new Error("O array precisa ter pelo menos um item");
  } else {
    console.log(`O array tem ${arr.length} itens`)
  }
}