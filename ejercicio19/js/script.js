//Funciones por variable

const estado = function () {
  let estados = prompt("Ingresa tu estado de animo");

  if (estados == "bien") {
    document.write("Felicidades <br>");
  } else if (estados == "mal") {
    document.write("I am sorry for you <br>");
  }
};

estado();

function saludo() {
  return "pikachu";
}

let pikachu = saludo();

document.write(pikachu);
