function jouer(){
p1=document.getElementById("1").value
p2=document.getElementById("2").value
var j1=0
var j2=0
a=prompt("check number even or odd")
for (var i=0; i<3; i++){
x1=prompt("number gameur1 ")
x2=prompt("number of gameur2")
   if (x1+x2%2===0){
    j1=j1+1}
    else {
    j2=j2+1
    }
}
if (j1===j2){
    alert("both equale")
}
else if(j1<j2){
    alert("gameur winner  "+p2)
}
else{
    alert("gameur winner "+p1)
}}

function reset() {
    window.location.reload();
  }