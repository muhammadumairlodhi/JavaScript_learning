
        class Animals {
          constructor(name) {
            this.name=Animals.capitalize(name)
          }
          run(){
            alert(`Animal ${this.name} is runing`)
          }
          static capitalize(name){
            return name.charAt(0).toUpperCase() + name.substr(1,name.length)
          }
        }
        let ali = new Animals("lion")
        ali.run()
   
