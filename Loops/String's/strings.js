// this is double colon String
let a="Sheik Dawoodu"
console.log(a)

// this is single colon String
let b='single colon String'
console.log(b)

// this is lenth
let text="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lenth=text.length;
console.log(lenth)

// this is slice
let fruts="banana,apple,kivi";
let part=fruts.slice(7,12)
console.log(part)

// this is substring
let cars="BMW,benelie,aadi";
let collection=cars.substring(4,11)
console.log(collection)

// this is replace
let data="i am sheik dawood devoloper"
let rplace=data.replace("devoloper","Web devoloper")
console.log(rplace)

// this is replace global wise
let global="keep working place & place"
let change=global.replace(/place/g,"wild")
console.log(change)

// this is replace incencetive
let incencetive="watching for tv"
let changing=incencetive.replace(/WATCHING/i,"keep watching")
console.log(changing)


// this is replace all
let para = "I love cats. cats are very easy to love. cats are very popular."
let repall=para.replaceAll("cats","dogs")
let repalla
console.log(repall)

// this is Uppercase
let upcase="i have to give your mobile"
let changingcase=upcase.toUpperCase();
console.log(changingcase)

// this is lowercase
let lowercase="I HAVE TO GIVE THE MOBILE"
let changinglower=lowercase.toLowerCase();
console.log(changinglower)


// this is concate
let concate='sheik';
let join='dwood';
let add=concate.concat("",join)
console.log(add)


// this is trim
let d="          hellow       ";
let trim=d.trim()
console.log(trim)

// this is padstart
let padof="5"
let chg=padof.padStart(4,"0")
console.log(chg)

// this is padend
let ass="6";
int=ass.padEnd(6,"9")
console.log(int)

// this is chartat
let  number="Hellow world"
chartat=number.charAt(0)
console.log(chartat)