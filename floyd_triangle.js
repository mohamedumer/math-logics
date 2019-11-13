var a = "";
var b = 1;
for (i = 1; i <= 5; i++) {
  a = "";
  for (j = 0; j < i; j++) {
    a += " " + b;
    b++;
  }
  console.log(a);
}
