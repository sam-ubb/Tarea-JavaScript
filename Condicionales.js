const num1 = 10;
const num2 = 20;
const num3 = 30;

//Mayor número de los 3

if(num1>=num2 && num1>=num3){
    console.log("El número mayor es el número 1");
}else if (num2>=num1 && num2>=num3){
    console.log("El número mayor es el número 2"); 
}else{
    console.log("El número mayor es el número 3");
}

//Menor número de los 3

if(num1<=num2 && num1<=num3){
    console.log("El número menor es el número 1");
}else if (num2>=num1 && num2>=num3){
    console.log("El número menor es el número 2"); 
}else{
    console.log("El número menor es el número 3");
}

//¿El número 1 es par o impar?

cpi = num1%2
if(cpi == 0){
    console.log("El número 1 es par")
}else{
    console.log("El número 1 es impar")
}

//¿El número 2 es par o impar?

cpi2 = num2%2
if(cpi == 0){
    console.log("El número 2 es par")
}else{
    console.log("El número 2 es impar")
}

//¿El número 3 es par o impar?

cpi = num3%2
if(cpi == 0){
    console.log("El número 3 es par")
}else{
    console.log("El número 3 es impar")
}

//¿El número 1,2 y 3 son multiplos de 5?

let ultimoDigito = num1.toString().slice(-1); //Imprime el último caracter del numero
if (ultimoDigito == 5|| ultimoDigito == 0){
    console.log("El número 1 es múltiplo de 5");
}else{
    console.log("El número 1 no es múltiplo de 5");
}

let ultimoDigito2 = num2.toString().slice(-1); //Imprime el último caracter del numero
if (ultimoDigito == 5|| ultimoDigito == 0){
    console.log("El número 2 es múltiplo de 5");
}else{
    console.log("El número 2 no es múltiplo de 5");
}

let ultimoDigito3 = num3.toString().slice(-1); //Imprime el último caracter del numero
if (ultimoDigito == 5|| ultimoDigito == 0){
    console.log("El número 3 es múltiplo de 5");
}else{
    console.log("El número 3 no es múltiplo de 5");
}