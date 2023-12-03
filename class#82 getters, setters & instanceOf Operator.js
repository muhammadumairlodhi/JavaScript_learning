
        class Animals {
            constructor(name) {
                this._name = name
            }
            fly() {
                console.log("I am flying");
            }
            get name(){
                return this._name
            }
            set name(newName){
                  this._name = newName
            }
        }
        class Rabbit extends Animals {
            eatCarrot() {
                console.log("eating carrot");
            }
        }
        let a = new Rabbit("beem")
        a.fly()
        console.log(a.name)
        a.name="Ali"
        console.log(a.name)

        let c = 562
        console.log(a instanceof Animals);
        console.log(a instanceof Rabbit);
        console.log(c instanceof Animals);
         

  