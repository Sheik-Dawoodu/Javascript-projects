// Array
let collection=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
console.log("vegitables:"+""+collection)

// delete
let collect=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
delete collect[1]
console.log("vegitables:"+""+collect)

let arrw=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
console.log(arrw[0])

// Splice 
let arr=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
arr.splice(1,1)
console.log("vegitables:"+""+arr)

//  
let arra=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
arr.slice(0,1)
console.log("vegitables:"+""+arra)

// slice
let a="Hellow world"
let result=a.slice(3)
console.log(result)

// concate
let b=[1,2]
arr=b.concat([3,4,5])
console.log(arr);

// push 
let push=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
push.push("lemon")
console.log(push);


// pop
let pop=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
pop.pop()
console.log(pop);

// shift
let shift=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
shift.shift()
console.log(shift);

// unshift  add to begining element
let unshift=["Potato","Cabbage","Tomato","Cauliflower","Spinach","Asparagus","Brinjal","Carrot"]
unshift.unshift("lemon")
console.log(unshift);

const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const day=new Date();
let days=week[day.getDay()]
console.log(`Today is ${days}`);
