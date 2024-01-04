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



