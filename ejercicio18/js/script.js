// Funciones sin argumento
function estado() {

  let estados = prompt("Ingresa tu estado de animo");

  if (estados == "bien") {
    document.write("Felicidades <br>");
  } else if (estados == "mal") {
    document.write("I am sorry for you <br>");
  }

}

estado();
estado();
estado();


