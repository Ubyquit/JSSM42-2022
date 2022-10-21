const USER = "ubyquit";
const PASSWORD = "Holamundo";

let u = prompt("Ingresa tu usuario");
let p = prompt("Ingresa tu contraseña");

if (USER == u && PASSWORD == p) {
    document.write("Bienvendo al sistema");
} else {
    document.write("El usuario y/o la contraseña son incorrectos");
}
