var a="aerodynamics";
var r=a.split("");
var b=["a","e","i","o","u"];
var d=[];
var g=[];
for(i=0;i<r.length;i++){
    var c=b.includes(r[i])
    if(c){
        d.push(r[i])
    }
else{g.push(r[i])}
}
console.log("consonants length: "+g.length);
console.log("vowels length: "+d.length);