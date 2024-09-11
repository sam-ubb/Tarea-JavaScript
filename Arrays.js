//Array a utilizar en las funciones
const numeros = [4, 3, 2, 3, 4];

//funcion que suma los elementos de un array

function sumaArray(array) {
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
console.log("La suma del Array es:")
console.log(sumaArray(numeros));

//funcion que calcula el promedio de numero dentro del array

function promedioArray(array) {
    const suma = array.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / array.length;
  }
  
console.log("El promedio del Array es de:")
console.log(promedioArray(numeros)); 

//Funcion para convertir los string en un array a mayusculas
const palabras = ["me", "llamo", "samuel"];
function convertirMay(array) {
    return array.map(cadena => cadena.toUpperCase());
  }
  
console.log(convertirMay(palabras));

//funcion para filtrar los numeros pares en un array
function encontrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
  }
  
console.log(encontrarPares(numeros));