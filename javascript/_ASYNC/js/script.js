// 1 - setTimeout

// console.log("Ainda não executou");

// setTimeout(() => {
//   console.log("Executou");
// }, 2000);

// console.log("Ainda não executou");

// 2 - setInterval

// setInterval(() => {
//     console.log('Executou')
// }, 100)

// 3 - Promises

// const promisse = Promise.resolve(5 + 5);

// console.log("Algum código");

// promisse
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(value));

// console.log("Outro código");

// 4 - Falha na promisse

// Promise.resolve(4 * "asd")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Falhou");
//     }
//   })
//   .catch((err) => console.log(err.message));

// 5 - Rejeição

// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve(`O numero é maior que 10`);
//     } else {
//       reject(new Error(`Número muito baixo`));
//     }
//   });
// }

// const a = checkNumber(21);
// const b = checkNumber(10);

// a.then((v) =>
//   console.log(`O resultado é ${v}`)
//   .catch((err) => console.log(err))
// );

// b.then((v) =>
//   console.log(`O resultado é ${v}`)
//   .catch((err) => console.log(err))
// );

