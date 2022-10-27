let arrayA = {
  nombre: "LUIS FERNANDO",
  apellidoP: "VILLAFAÑA",
  apellidoM: "REJON",
  imgP: "assets/img/yo.jpg",
  imgF: "assets/img/firma.png",
};

let apellidoP = arrayA["apellidoP"];
let apellidoM = arrayA.apellidoM;
let nombre = arrayA.nombre;
let imgP = arrayA.imgP;
let imgF = arrayA.imgF;

document.getElementById("apellidoP").innerHTML = apellidoP;
document.getElementById("apellidoM").innerHTML = apellidoM;
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("imgP").src = imgP;
document.getElementById("imgF").src = imgF;
