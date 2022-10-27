let animales = ["Perro", "Gato", "Pajaro", "Marmota", "Alux","PingÜino"];
animales.edad = 20;

document.write("<br> FOR CON IN <br>");

for (animal in animales) {
  document.write(animal + "<br>");
}

document.write("<br> FOR CON OF <br>");

for (animal of animales) {
  document.write(animal + "<br>");
}
