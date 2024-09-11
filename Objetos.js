// objeto "persona"
const persona = {
  nombre: "Samuel Fuentes",
  edad: 22,
  genero: "Masculino"
};

// Mostrar la información de la persona en la consola
console.log("Información de la persona:");
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Género: ${persona.genero}`);

//  Objeto "caja"
const caja = {
    cuadernos: 5,
    lapices: 24,
    papel: 150,
    fotografias: 3,
    buenEstado: true
  };
  
  // Imprimir el objeto entero
  console.log("Objeto completo:");
  console.log(caja);
  
  // Imprimir cada propiedad y su tipo de dato
  console.log("\nPropiedades y tipos de datos:");
  for (let propiedad in caja) {
    console.log(`${propiedad}: ${caja[propiedad]} (Tipo: ${typeof caja[propiedad]})`);
  }
  