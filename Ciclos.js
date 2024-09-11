//Imprimir los números del 1 al 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log(" ")

//Imprimir los números del 10 al 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}

console.log(" ")
//Imprimir números del 1 al 10 pero los pares
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

console.log("")
//Imprimir números del 1 al 10 pero los impares
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }

console.log("");
//Imprimir números del 1 al 10 pero los múltiplos de 3
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }

console.log("")
//Imprimir múltiplos de 5
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }

console.log("")
//Imprimir múltiplos de 3 y 5
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }

console.log("")
//Imprimir múltiplos de 3 o 5
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
