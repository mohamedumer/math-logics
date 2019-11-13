var num=5;
var power=2;

function func(num,power){
    var c=num;
    var d=num;
    if(power==0){
        return 1;
    }
    else{

        for(i=1;i<power;i++){
            for(j=1;j<num;j++){
             c+=d;
            }
            d=c;
            }
            return c;
    }

}
console.log(func(num,power));