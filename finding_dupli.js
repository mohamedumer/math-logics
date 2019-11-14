var a=[1,2,1,3,4,7,4,2,7,4];
var Duplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
Duplicates(a);
console.log([...new Set(Duplicates(a))]);