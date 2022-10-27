for (let i = 0; i < 10; i++) {
  if (i <= 5) {
    continue;
  }
  document.write("Continue " + i + "<br>");
}

for (let j = 0; j < 10; j++) {
  document.write("Break " + j + "<br>");
  if (j == 5) {
    break;
  }
}
