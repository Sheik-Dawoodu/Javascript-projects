let person={
    firstName:"Sheik",
    lastName:"Dawood",
 
    get fullName(){
       return `my firstName is ${this.firstName} and the last name is ${this.lastName}`;
    },
    set fullName(valu){
       let values=valu.split(" ")
       this.firstName=values[0];
       this.lastName=values[1]??"no";
    }
 }
 person.fullName="Hari Krishna"
 console.log(person.fullName)


