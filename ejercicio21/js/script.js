
const operacion = (numero1, numero2) => {
  let multiplicacion = numero1 * numero2;
  document.write(multiplicacion);
};

operacion(5, 2);
document.write("<br>");

const saludar1 = (nombre) => {
  document.write(`Hola ${nombre}`);
};

const saludar = nombre => document.write(`Hola ${nombre}`);

saludar("Luis");
