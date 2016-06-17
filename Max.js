var a = prompt("enter a number");
var b = prompt("enter a second number"); 
var c;
c=max(a,b)
document.write("Largest number is "+c+"<br>")
function max(a,b)
{
if(a > b)
{
return a;
}
else
{
return b;
}
}
