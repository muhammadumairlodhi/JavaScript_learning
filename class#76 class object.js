
        class blankform {
            submit() {
                alert( this.name+" your form has been submitted sussesfully with train no."+ this.umair );
            }
            cancel() {
                alert(  `${this.name}` + " your form has been cancelled with train no. "+ `${this.umair}` );
            }
            inprosess(){
                alert (this.name+" your form is in prosess with train no."+ this.umair)
            }
        fill(givenname, trainno) {
                this.name = givenname
                this.umair = trainno
            }
        }
        let hamzaform = new blankform()
        hamzaform.fill("hamza",  65678876)
        let aliform = new blankform()
        aliform.fill("ali", 4356776)


        hamzaform.submit()
        aliform.submit()
        hamzaform.cancel()
aliform.inprosess()
  