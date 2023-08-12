let a,b,c;


document.getElementById("sumbit").onclick = function(){
    
a=document.getElementById("atextbox").value;
a=Number(a)
b=document.getElementById("btextbox").value;
b=Number(b)
c=a+b;
document.getElementById("Clabel").innerHTML="Total= "+c;

}