// Crear el objeto "pedro"
var pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
  };
  
  // Imprimir el valor de la llave "edad"
  console.log(pedro.edad);
  
  // Agregar la propiedad "estatura"
  pedro.estatura = 1.8;
  
  // Eliminar la propiedad "activo"
  delete pedro.activo;
  
  // Recorrer todas las propiedades e imprimir sus llaves y valores
  for (var key in pedro) {
    console.log(key + ": " + pedro[key]);
  }
  
  // Agregar la función "saluda"
  pedro.saluda = function() {
    return "Hola, me llamo " + this.nombre;
  };
  
  // Llamar la función "saluda"
  console.log(pedro.saluda());
  