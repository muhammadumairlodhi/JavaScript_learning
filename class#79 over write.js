 
       class employee {
         constructor(name, password,leave) {
           this.name=name
           this.password=password
           this.leave=leave
         }
         login(){
           console.log(`${this.name}has been login Successfully and his password is ${this.passwordclass}`);
         }
         logout(){
           console.log(`${this.name}has been logout Successfully and his password is ${this.passwordclass}`);
         }
         getleave(){
           console.log(`${this.name} has requested for ${this.leave+1} ('one extra') leave`);
         }
       }
       class programmer extends employee {
         constructor(name) {
           super(name)
         }
         requestedtea(){
         console.log(`${this.name} has requested to tea`);
         }
       }
       let ali = new employee("ali", 4567, 5)
       let umair = new programmer("umair")
       umair.requestedtea()
       ali.getleave()
  
