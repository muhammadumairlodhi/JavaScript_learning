

let runAgain = true;

const canDrive = (age)=>{
        return age >= 18 ? true : false
      }

      while (runAgain) {
      let age = prompt("Enter your age")
      age = Number.parseInt(age)

      if (age<0) {
         console.error("please enter a vilde age" );
   break;
       }
       if (canDrive(age)) {
         alert("Yes you can drive")
       }else {
          alert(" you can't drive")
       }
runAgain = confirm('do you want to run again')
}
let number = prompt("Enter a number")
number=Number.parseInt(number)
if (number > 4) {
  location.href = " https://google.com"
}
let color = prompt("Enter a color")
document.body.style.background =  color
 