
       /* greet()
        function greet(name) {
            console.log("Hi, I am umair " + `${this.name}`);
        }
        console.log(a);
        name = "ali"
        this.name = name*/

        var a = 9;//undefined
        // let a=9; //error 
        // const a ; error
        console.log(a);
      
      
      //It will make error because hoisting in not for function and class expression 
        greet()
        var greet=()=> {
            console.log("Hi, I am umair ");
        }