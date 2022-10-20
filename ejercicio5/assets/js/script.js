/* VAR tienen una propiedad en su scope,
VAR puede ser considerada como variable global
Dependiendo de su scope */

// Tipo de datos primitivos
var a = 10; // Number o  numerico
var b = 10.5; // Float o decimales
var c = "a"; // char o caracteres
var d = true; // Boolean o Bool
var e = false;

if (a >= 10) {
  b = b + 10;
  document.write(b);
  document.write("<br>")
}

b = b + 10;

// objeto document, metodo write.
document.write(b);
