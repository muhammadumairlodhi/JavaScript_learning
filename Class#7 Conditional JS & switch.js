


let a = prompt("what is your age?");
a = Number.parseInt(a);

if (a <= 2) {
    alert(" you are in Infancy age...")
}
else if (a <= 7) {
    alert(" you are Early  in Childhood age...")
}
else if (a <= 13) {
    alert(" you are Middle in Childhood age...")
}
else if (a < 18) {
    alert(" you are  in Adolescence age...")
}
else if (a < 40) {
    alert("   you are  in Young Adulthood age...")
}

else if (a < 65) {
    alert("    you are in Middle Adulthood age... ")
}
else if (a < 70) {
    alert(" you are  in Late Adulthood age... ")
}
else if (a < 75) {
    alert(" Now you are in older age...")
}
else if (a > 75) {
    alert(" you are in late older age...")
}
else {
    alert("Error: Write Your age...")
}
alert("Thanks for using")




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
    case 6:
        day = "Saturday";

        break;
    default: "Waiting for weekend"
        break;
}



console.log(day)
document.getElementById("demo").innerHTML = "today is " + day;

let furit = "orange";

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
        console.log(Error);

}


