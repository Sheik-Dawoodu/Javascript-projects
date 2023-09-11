// if & else
const date=new Date().getHours();
let greet;
if(date<13){
  greet ="good morning"
}
else{
   greet="good evening"
}
console.log(greet);

// if elseif
const hours=new Date().getHours();
let hour;

if(hours <12){
    hour="good morning";
}
else if(hours >18){
    hour="good after noon";
}else{
   hour="good night";
}
console.log(hour)
let a=18;
let age;
if(a>=18){
    age="your votter"
}
else{
    age="please waite here";
}
console.log(age)
