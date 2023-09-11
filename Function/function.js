
function get(){
    let name="Sheik dawoodu"
    msg="Hello" + " "+name+ " "+"Welcome to SPAKOUT TECHNOLOGY"
    console.log(msg)
}
get()

// Aerrow function 
let sum=(a,b)=>(a+b)
console.log(sum(10,20))

// Default value
function message(value,text="i'm Sheik dawoodu") {
    console.log(text+":"+value)
}
message("comming from erode")

// Functions == Comments
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      console.log(j);
    }
  }