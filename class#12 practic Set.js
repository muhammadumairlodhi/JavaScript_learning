
      //Question #1
      let marks={
        umair:90,
        harry:88,
        ali :50,
        lovish:33,
        hamza:4,
      }
       for (let i = 0; i < Object.keys(marks).length; i++) {
         console.log("The Marks of " + Object.keys(marks)[i]+ " are " +marks[Object.keys(marks)[i]])
       }
//Qusstion #2
let mark={
  umair:90,
  harry:88,
  ali :50,
  lovish:33,
  hamza:4,
}
for (let  key in mark) {
   console.log("The Marks of "+key+ " are " + marks[key]);
}
// question #3
let cn=34
let i
while (i!=cn)

i=prompt("Enter a number")
console.log("you have done it");
//// QUESTION: 4
const mean=(a, b, c, d, )=>{
  return (a +b+c+d)/4
}
console.log(mean(4,5,6,7))
  
