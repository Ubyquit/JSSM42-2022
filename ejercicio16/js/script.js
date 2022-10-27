/*
Un arreglo asociativo == JSON
Un arreglo asociativo == una base datos noSQL llama documentos
(Mongo DB)
Un arreglo asociativo tiene la propieda de Clave-Valor
*/

let aa = {
  nombre: "Luis",
  edad: 32,
  correoE: "luisvr@gmail.com",
};

let nombre = aa["nombre"];
let edad = aa["edad"];
let correoE = aa["correoE"];

document.getElementById("nombre").innerHTML = nombre;
