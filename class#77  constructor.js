

         class blankform {
             constructor(givenname, trainno) {
                console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
                 this.name = givenname
                 this.trainno = trainno
             }
 
             submit() {
                 alert(this.name + " your form has been submitted sussesfully with train no." + this.trainno);
            
             }
             cancel() {
                 alert(`${this.name}` + " your form has been cancelled with train no. " + this.trainno)
                
             }
             inprosess() {
                 alert(this.name + " your form is in prosess with train no." + this.trainno)
             }
 
         }
         let hamzaform = new blankform("hamza", 6578)
      
         let aliform = new blankform("Ali", 678)
 
 
         hamzaform.submit()
         aliform.submit()
         hamzaform.cancel()
         aliform.inprosess()


        class addmisittionform {
            constructor(name, rollnumber, adress) {
            console.log("CONSTRUCTOR CALLED..." + name + " " +rollnumber +" "+ adress)
           
                this.name = name
                this.rollnumber = rollnumber
                this.adress = adress
            }
            submit() {
                alert(`${this.name}` + " your admission form has been submitted with Roll number:" + `${this.rollnumber}` + " and your adress is: " + `${this.adress}`)
            }
            cancel() {
                alert(`${this.name}` + " your admission form has been  canceled due to some error with Roll number:" + `${this.rollnumber}`+"and your adress is: " + this.adress )
                this.adress =  undefined
            }
        }
        
        

        let umairform = new addmisittionform("umair", 16, "bhalwal")
        let Aliform = new addmisittionform("ali", 16, "bhalwal")
        umairform.submit()
        Aliform.cancel()


         
 
  