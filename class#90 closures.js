
        /*Message = "good morning from Umair"
        function hello() {
            Message = "hi, every body in the hall"
            console.log(" welcome & \n" + Message);
        }
        hello()*/

        //example from mozilla

        function init() {
            var name = "Mozilla";
            function displayName() {
                name = "ali"
                console.log(name);
            }
            return displayName;
        }
        let a = init();
        a()

function myfun() {
     const x = () => {
            let a = 1;
            console.log(a);
            const y = () => {
               // let a = 2;
                console.log(a);
                const z = () => {
                   // let a = 3;
                    console.log(a);
                }
                z()
            }
            a = 999;
            y()
        }
        return x
    }        
let e = myfun()
e()
    
  