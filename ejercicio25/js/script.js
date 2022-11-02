/*
* Clases o class = fabrica
* Constructor = maquinas de partes
* Abstracción = Reducir a lo importante
* Parametros = Atributos
! this = objeto que se va a instanciar
! this tiene propiedades y las propiedades
! tienen parametros.
* Intancias  son los objetos.
*/

class Animal {
  constructor(especie, color, edad, patas) {
    this.especie = especie;
    this.color = color;
    this.edad = edad;
    this.patas = patas;

    this.info = `hola soy un ${especie}<br>
    soy de color ${color}<br>
    tengo la edad de ${edad} años<br>
    y cuento con ${patas} patas <br> <br>`;
  }
  informacion() {
    document.write(this.info);
  }
  ladrar() {
    document.write("Waaaw Waaaow <br>");
  }
}

const perro = new Animal("Perro", "Negro", 32, 4);
const pajaro = new Animal("Pajaro", "Verde", 1, 2);

perro.ladrar();
perro.informacion();

pajaro.informacion();
