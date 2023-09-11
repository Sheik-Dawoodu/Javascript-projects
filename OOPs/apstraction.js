// Abstraction
function apstract(n,action){
    for (let i=0;i<n;i++){
        action(i);
    }
}
 let b=[];
apstract(15,(i)=>{
    b.push(`Unitys ${i+1}`)
})
console.log(b);