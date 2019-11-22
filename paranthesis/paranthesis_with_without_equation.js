// with equation: {a*(2+f)+(2-g*[2+r])}
function test(){
    var str= document.getElementById("eqn").value;
    var a= String(str);
    console.log(a);
var b=["{","(","["]
var f=[")","}","]"]
var g=["+","-","*","%","/"]
var c=[] 
var flag=0;
var d = {"{":"}",
         "[":"]",
         "(":")"
        }
       
for(i=0;i<a.length;i++){
    if(i==0){
        var next= g.includes(a[i+1])
    }
    else if(i>0 && i<a.length){
        var next= g.includes(a[i+1])
        var prev= g.includes(a[i-1])
    }
    else{
        var prev= g.includes(a[i-1])
    }
   
    

    if(b.includes(a[i]) && !next){
        c.push(d[a[i]])
    }
    else if(f.includes(a[i]) && c[c.length-1]==a[i] && !prev) {
        c.pop();
    }
    else if(f.includes(a[i]) || b.includes(a[i])){
        console.log("not balanced")
        document.getElementById("answer").innerHTML="Not Balanced";
        document.getElementById("answer").style.backgroundColor="red";
document.getElementById("answer").style.color = "white";
        flag=1;
        break
    }
    
}
if (c.length==0 && flag==0 && !g.includes(a[0]) && !g.includes(a[a.length-1])){
    console.log("balanced")
    document.getElementById("answer").innerHTML="Balanced";
    document.getElementById("answer").style.backgroundColor="green";
    document.getElementById("answer").style.color = "white";
}
else if(flag==0){
console.log("not balanced")
document.getElementById("answer").innerHTML="Not Balanced";
document.getElementById("answer").style.backgroundColor="red";
document.getElementById("answer").style.color = "white";
}
}

//only for paranthesis: {{[]}}(())()[]{}

// var a = "]";
// var b=["{","(","["]
// var c=[] 
// var flag=0;
// var d = {"{":"}",
//          "[":"]",
//          "(":")"
//         }
// for(i=0;i<a.length;i++){
//     if(b.includes(a[i])){
//         c.push(d[a[i]])
//     }
//     else if(c[c.length-1]==a[i]) {
//         c.pop();
//     }
//     else{
//         console.log("not balanced")
//         flag=1;
//         break
//     }
    
// }
// if (c.length==0 && flag==0){
//     console.log("balanced")
// }
// else if(flag==0){
// console.log("not balanced")
// }
