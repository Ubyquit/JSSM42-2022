let animales = ["Perro", "Gato", "Pajaro", "Marmota", "Alux","PingÜino"];

document.write("FOR COMUN <br>");
for(let i = 0; i <= 10; i++){
  document.write(animales[i] + "<br>");
}

document.write("<br> FOR CON IN <br>");

for (animal in animales) {
  document.write(animal + "<br>");
}

document.write("<br> FOR CON OF <br>");

for (animal of animales) {
  document.write(animal + "<br>");
}

document.write("<br> FOR CON IN EN ARREGLO <br>");

for (animal in animales) {
  document.write(animales[animal] + "<br>");
}