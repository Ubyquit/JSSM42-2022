/*
Un arreglo asociativo == JSON
Un arreglo asociativo == una base datos noSQL llama documentos
(Mongo DB)
Un arreglo asociativo tiene la propieda de Clave-Valor
*/

let aa = {
    nombre: "Luis",
    edad: 32,
    correoE: "luisvr@gmail.com"
}

let nombre = aa['nombre'];
let edad = aa['edad'];
let correoE = aa['correoE'];

document.write('<img src="https://media-exp1.licdn.com/dms/image/C4E03AQEfQcAaOIAZRw/profile-displayphoto-shrink_200_200/0/1517043051432?e=1671062400&v=beta&t=8MH3gzf3E7qDcvNZNUWLvsnJ-oW8aclxIJ5z6HpJHWg">')

document.write(`El nombre es: ${nombre} <br>`);
document.write(`El nombre es: ${edad} <br>`);
document.write(`El nombre es: ${correoE} <br>`);