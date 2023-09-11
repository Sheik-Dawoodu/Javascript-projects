// inheritance
class Phone{
    constructor(brand){
    this.mobile=brand;
    }
    parent(){
        return `I have ${this.mobile}`;
    }   
}
class Model extends Phone{
    constructor(brand,mod){
        super(brand);
            this.model=mod
    }
child(){
    return this.parent()+" "+ this.model
}
}

class Color extends Model{
constructor(brand,mod,col){
    super(brand,mod);
    this.color=col
}
subchild(){
    return this.child()+" in color "+this.color
}
}

class Features extends Color{
    constructor(brand,mod,col,feat){
        super(brand,mod,col);
        this.Feature=feat;
    }
    lowsub(){
        return this.subchild()+ " " + this.Feature
    }
}

class Warenty extends Features{
    constructor(brand,mod,col,feat,war){
        super(brand,mod,col,feat)
        this.warenty=war;
    }
    underlowsub() {
    return this.lowsub()+" and it has "+this.warenty
    }
}
const myphone=new Warenty("Apple","node3","red","128 gp ram","2-Years warenty")
console.log(myphone.underlowsub());