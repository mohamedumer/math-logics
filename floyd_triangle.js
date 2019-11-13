var row = 5;  //input
var a = "";
var b = 1;
for (i = 1; i <= row; i++) {
  a = "";
  for (j = 0; j < i; j++) {
    a += " " + b;
    b++;
  }
  console.log(a);
}
