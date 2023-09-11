let collet =`[
    {
        "name":"shik dawoodu",
        "password":1292030,
        "address":"palaniandaver covilo street jambai"
    },
    {
        "name":"HariKrishna",
        "password":1292030,
        "address":"udumalai"
    },
    {
        "name":"joel",
        "password":1292030,
        "address":"Thirupur"
    }
]`
let parsed=JSON.parse(collet)
let string=JSON.stringify(collet)
console.log(parsed);
console.log(parsed[1]   );
console.log(parsed[1].name);
// console.log(string);
