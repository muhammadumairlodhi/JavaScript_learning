
      //for loops
      let numbers=[1, 2, 3, 4, 5, 6]
     for (var i = 0; i < numbers.length; i++) {
       console.log(numbers[i])
     }
     //forEach
    let num=[1, 2, 3, 4, 5, 6]
    num.forEach((x) => {
      console.log( x * x);
    });
//from loops
let name ="umair";
let newarray = Array.from(name)
 console.log(newarray);

//for of
let n=[1, 2, 3, 4, 5, 6]
for (let i of n) {
  console.log(i);
}
//for in
let object=[1, 2, 3, 4, 5, 6]
for (let i in object) {
   console.log(i);
}

 