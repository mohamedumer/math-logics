var a = "b3c6d15";
var b = a.split(/[0-9]/);
var c = a.split(/[^0-9]/);
var d = [];
var e = [];
var f = "";
for (i = 0; i < b.length; i++) {
  if (b[i]) {
    d.push(b[i]);
  }
  if (c[i]) {
    e.push(parseInt(c[i]));
  }
}
for (j = 0; j < e.length; j++) {
  for (i = 0; i < e[j]; i++) {
    f += d[j];
  }
}
console.log(f);
//input: b3c6d15
//expected output: bbbccccccddddddddddddddd