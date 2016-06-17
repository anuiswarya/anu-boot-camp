var a = prompt("enter a number");
var b = prompt("enter a second number"); 
var c;
c=max(a,b)
console.log("Largest number is" +c)
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