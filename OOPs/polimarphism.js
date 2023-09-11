class Shap{
   draw (){
    return 'i am genric Shap'
   }
}
class Squir extends Shap{

    draw(){
        return 'i am sqquir shap'
    }
}

class Serqul extends Shap{

    draw(){
        return 'i am serqul Shap'
    }
}

let a=new Shap();
console.log(a.draw())

a=new Squir();
console.log(a.draw())

a=new Serqul();
console.log(a.draw())