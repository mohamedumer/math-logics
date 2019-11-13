var data=[
            {birth:1947, death:1950},
            {birth:1950, death:1951},
            {birth:1948, death:null},
            {birth:1952, death:null},
            {birth:1947, death:1952 }
             ];
var len=data.length;
var population=[];
var temp=0;


for(year=1947;year<=1952;year++){
    for(i=0;i<len;i++){
       
        var Birth= data[i].birth;
        var Death= data[i].death;
      
       if(Birth<=year && year<Death || Death==null && Birth<=year){
          
            temp+=1; 
         }
       }
    population.push(temp);
    temp=0;
    }
var pop=0;
for(year=1947;year<=1952;year++){
   
   console.log(year +" : "+ population[pop])
    pop++;
}