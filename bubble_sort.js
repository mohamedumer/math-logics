var a=[2,3,6,4,3,2,1,6,4,3,2];
for(i=0;i<a.length;i++){
    for(j=i;j<a.length;j++){
        if(a[i]>a[j+1]){
            b=a[i];
            a[i]=a[j+1];
            a[j+1]=b;
        }
    }
}
console.log(a)