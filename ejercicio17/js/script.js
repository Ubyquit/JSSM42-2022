let a = 0;
let b = 0;

while (a <= 10) {
  document.write(`el valor de a es ${a} <br>`);

  if (a == 3) {
    break;
  }

  a++;
}
document.write("Cuenta bloqueada <br><br>");

do {
  document.write(`el valor de a es ${b} <br>`);
  b++;
} while (b <= 10);
