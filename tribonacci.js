var a=[]
if(a[0]==null){
    a.push(1)
}
if(a[0]==1){
    a.push(1)
    a.push(1)
}
for(i=3;i<15;i++){
    a.push(a[i-1]+a[i-2]+a[i-3])
}
console.log(a)