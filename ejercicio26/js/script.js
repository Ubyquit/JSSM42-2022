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
  }
  silbar() {
    document.write("Fiuuu Fiuuuu");
  }
}

class Perro extends Animal {
  constructor(especie, color, edad, patas, raza) {
    super(especie, color, edad, patas);
    this.raza = raza;

    this.info = `hola soy un ${especie}<br>
    soy de color ${color}<br>
    tengo la edad de ${edad} años<br>
    y cuento con ${patas} patas <br>
    soy de la raza ${raza} <br><br>`;
  }
  informacion() {
    document.write(this.info);
  }
  ladrar() {
    document.write("Waaaw Waaaow <br>");
  }
}

const perro = new Perro("Perro", "Negro", 32, 4, "Pitbull");
const pajaro = new Animal("Pajaro", "Verde", 1, 2);

perro.ladrar();
perro.informacion();
