var a=[1,2,1,3,4,7,4,2,7,4];
var b=[];
for(i=0;i<a.length;i++){
    var c=b.includes(a[i])
    if(!c){
        b.push(a[i])
    }
}
console.log(b)