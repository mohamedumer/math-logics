var a=[]
if(a[0]==null){
    a.push(1)
}
if(a[0]==1){
    a.push(1)
}
for(i=2;i<10;i++){
    a.push(a[i-1]+a[i-2])
}
console.log(a)