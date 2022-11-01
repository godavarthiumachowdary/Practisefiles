let username;

document.getElementById("mybutton").onclick=function(){

 username=document.getElementById("mytext").value;
 console.log(username);
document.getElementById("entername").innerHTML="hai"+"<br>"+username+"how r u";
} 

// let age= window.prompt("How old are you?");
// age=Number(age);
// age+= 1;
// console.log("happy birthday you are",age,"years old")

let x;
let y;
let z;

x=Number("3.14");
y=String(3.4);
z=Boolean("ink")

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);