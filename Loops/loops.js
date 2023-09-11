// for loop
for(let i=1;i<=5;i++)
console.log(i)

// for loops in reverse 
for (let index = 10; index >=1; index--) {
    console.log(index)
}

// While loop
console.log("While loop");
let i=1
while (i<10) {
    console.log("hai"+ i)
i++
}

// do while loop
console.log("do while loop");
i=1
do{
    console.log("do while loop"+ i)
    i++
}
while(i<10)
// odd number
console.log("odd number")
for (i=1;i<50;i++){
    if (i%2 !==0) {
        console.log("odd number" +i);
    }
}

// Array
console.log("array");
var arr=[1,2,3,4,5,6,7]
for(str=1;str<arr.length;str++){
    console.log(arr[str]);
}

// forin object
console.log("forin")
const person={
    name:"Sheik dawood",
    age:22,
}
for(let key in person){
    console.log(person[key])
}

// forin array
console.log("forin")
const cars=["BMW","volvo","aadi"]
for (let  company in cars){
    console.log("This is cars company"+cars[company])
}

console.log("for of")
const car=["BMW","volvo","aadi"]
for (let  compans of car){
    console.log("collor:"+compans)
}



