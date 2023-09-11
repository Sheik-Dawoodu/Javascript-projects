
// // let a=["a","b","c"]
// // a.push(3)
// // console.log(a);

// // setTimeout(()=>console.log("step1"),3000)
// // setTimeout(()=>console.log("step2"),2000)
// // setTimeout(()=>console.log("step3"),1000)

const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const day=new Date();
let days=week[day.getDay()]
console.log(`Today is ${days}`);

// // console.log(new Date().getFullYear())

// // // class and Object
// // class User{
// //     constructor(name,age){
// //         this.name=name;
// //         this.age=age;
// //     }
// // }
// // let userone=new User("Sheik dawoodu",22)

// // console.log(`I am ${this.name}`)
// // let arr=[1,2,3,4,5,6]
// // console.log(arr)
// // console.log(typeof(arr));

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// //   getDetails() {
// //     return (The name of the person 3 is ${this.firstName +" "+ this.lastName}  and his age is ${this.age}.);
// //   }
// }

// let person1 = new Person('Garunyaa', 'Shanmugam', '25');
// let person2 = new Person('Kanimozhi', 'Ganapathy', '25');
// let person3 = new Person("Hari ", "Krishnan", "21");  

// console.log(The name of the person 1 is ${person1.firstName} and her age is ${person1.age}.);
// console.log(The name of the person 2 is ${person2.firstName} and her age is ${person2.age}.);
// console.log(person3.getDetails());

// let age=19;
// let message=true;

// if(age>18 && message){
//     console.log("sheik is old enough to drive and has his own car.");
// }
// else{
//     console.log("sheik does not drive.");
// }

// const ages = 32;
// const citizen = ages >= 18 ? "Can vote" : "Cannot vote";
// console.log(citizen);



//   Encapsulation
// class BankAccount {
//     constructor(accountNumber, initialBalance) {
//       this._accountNumber = accountNumber; // Conventionally considered "protected"
//       let _balance = initialBalance; // Private variable     
//       this.deposit = function(amount) {
//         if (amount > 0) {
//           _balance += amount;
//         }
//       };
//       this.withdraw = function(amount) {
//         if (amount > 0 && amount <= _balance) {
//           _balance -= amount;
//         }
//       };
//       this.getBalance = function() {
//         return _balance;
//       };}}
//   const account = new BankAccount("12345", 1000);
//   account.deposit(500);
// account.withdraw(200);
//   console.log("Current balance:", account.getBalance())

// let a=["A","b","c","d"]

// b=a
// console.log(typeof(b));


// let c=["apple","orange","banana","pinapple"]

// c[c.length[2]]="kivi"
// console.log(c);

// let d=["A","b","c","d"]
// let e=["apple","orange","banana","pinapple"]
// let f=["e","f","g","h","i"]

// g=d.const(e,f);
// console.log(g)


const http = require('http')
const requestListener = (req, res)=>{
    console.log("Request is Incoming");
    const variable = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        //console.log(data)
        return data
    }
    variable();
}

const server = http.createServer(requestListener);
 
server.listen(3000,'localhost', function(){
    console.log(http+"Server is Listening at Port 3000!");
});
//  let array=[1,2,3,054,0645]

// console.log(array);

"Use synchronous operations for simple tasks that don't involve waiting or blocking. If you need to execute multiple tasks sequentially, where the output of one task is the input for the next, synchronous need to be used."
"Asynchronous code doesn't block the execution of other tasks"
"When you have multiple tasks that can be executed independently, use asynchronous operations to execute them in parallel"