
     class animals{
        constructor(name, color){
          this.name=name
          this.color=color
        }
        runing(){
            console.log(`${this.name} is runing fast and his  Color is ${this.color}`);
        }
     }

     class mon  extends animals{
        barking(){
         console.log(`${this.name} is barking at night and his color is  ${this.color}` )
    }   
}

        class monk  extends  mon{
    }   
     



     let animal = new animals("tiger","white")
     let m = new mon ("monkey", "black")
    let g = new monk ("panda", "blue" )
     animal.runing()
       m.  barking()
       g. barking()
 