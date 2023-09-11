// synchronous
console.log("console 1");
console.log("console 2");
console.log("console 3");

// Asynchronous
setTimeout(()=>{
   console.log("i am asynchronous console-1");
},4000)

setTimeout(()=>console.log("i am asynchronous console-2"),3000)

setTimeout(()=>console.log("i am asynchronous console-3"),2000)


// synchronous function

function sync(){

    console.log("console function1");
    console.log("console function2");
    console.log("console function3");
}
sync()

// setInterval(()=>console.log("i am set intervel"),2000)