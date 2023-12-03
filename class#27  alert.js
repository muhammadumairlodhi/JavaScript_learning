
      alert("Enter the value of a")
      let a = prompt("Enter here")
      a= Number.parseInt(a)
      alert("you enter a type of  "+ (typeof a))
   let write = confirm("Do you want to write it to your page")
   if (write) {
     document. write(a)
   }
   else {
     document.write("please allow me to write")
   }
   