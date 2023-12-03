

  
   let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
    console.log(day)
    document.getElementById("demo").innerHTML="today is "+day;
     

let furit="orange";

switch (furit) {
      case "Apple":
      console.log("You select apples");

    break;
    case "Banana":
    console.log("You select banana");
  break;
  case "orange":
  console.log("You select orange");

    break;
  default:
  console.log(Error );

}
 
