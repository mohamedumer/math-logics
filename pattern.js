var input = 12345;
if(typeof(input)==="number"){
    var inp=String(input);
}
else{
    inp= input;
}
var b = inp.split("");
var f = "";
var n = b.length;
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    if (i == j) {
      f += b[i];
    } else if (i == n - 1 - j) {
      f += b[n - 1 - i];
    } else {
      f += " ";
    }
  }
  if (f) {
    console.log(f);
    f = "";
  }
}
