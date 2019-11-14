var a=[2,3,6,4,3,2,1,6,4,3,2];
var len=a.length;
for(i=0; i<len; i++){
    for(j=i; j<len; j++){
        if(a[i]>a[j+1]){
            b=a[i];
            a[i]=a[j+1];
            a[j+1]=b;
        }
    }
}
console.log(a)
