var a = 10;
var b = 5;
var c = 0;
if (a > b) {
  for (i = 0; i < b; i++) {
    c += a;
  }
} else {
  for (i = 0; i < a; i++) {
    c += b;
  }
}
console.log(c);
