console.log("Hello World");
document.write("Hello World");

var num=undefined;
console.log(num);
console.log(typeof(num));
num=false;

const sym1=Symbol(4)
 console.log(sym1);
 const sym2=Symbol(4);
 console.log(sym2);
 if(sym1==sym2){
    console.log("true");
 }
 else{
    console.log("false")
 }



//logical operator

 x=6;
 y=3;
 console.log(x=10&&y>1);
 console.log(x==6||y==5);
 console.log(!(x==y));

var count;
document.write("Starting Loop");
for(count=0; count<10; count++){
    document.write("Current Count : "+count+"<br/>");
}