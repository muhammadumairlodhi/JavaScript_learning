
      //push()
      //Description: Adds one or more elements to the end of an array.
      let numbers = [1, 2, 3];
    numbers.push(4, 5);
     console.log(numbers);  // Output: [1, 2, 3, 4, 5]
     //pop()
     //Description: Removes and returns the last element from an array.
        let numbers1=[1, 2, 3]
let removedElement = numbers.pop();
console.log(removedElement);  // Output: 3
//Shift()
//Description: Removes and returns the first element from an array.
let numbers2 = [1, 2, 3]
 let removedelement=numbers2.shift()
console.log(removedelement);// Output: 1
//unshift()
// Description: Adds one or more elements to the beginning of an array.
let number3=[ 2, 3, 4]
number3.unshift(1)
console.log(number3);//Output:1, 2, 3, 4
//concat()
//Description: Combines two or more arrays, creating a new array.
let number4=[1, 2,3]
let number5=[4,  5,  6]
let combinedarray=number4.concat(number5)
console.log(combinedarray);//Output:1, 2, 3, 4, 5, 6
//slice
//Description: Creates a new array by extracting a portion of an existing array.
let number6=[1, 2, 3, 4]
let slicedarray=number6.slice(1,4);
console.log(slicedarray);//Output:2, 3, 4
//splice
//
let number7=[1, 7, 6, 4]
let RemovedElement=number7.splice(1, 2, 2, 3, )
console.log(number7);//Output:
console.log(RemovedElement);//output:
//forEach
//
let number8=[1, 2, 3, 4]
number8.forEach(function(element1){
  console.log(element1);
})
/*Output:1
2
3
4*/
//map
//
let number9=[1, 2, 3, 4, 5]
let doublenumber=number8.map(function(element3){
  return element3*2;
})
console.log(doublenumber);
//filter
//
let numbers10 = [1, 2, 3, 4, 5];
let evenNumbers = numbers10.filter(function(element) {
  return element % 2 === 0;
});
console.log(evenNumbers);  // Output: [2, 4]
//reduce
//
let numbers11 = [1, 2, 3, 4, 5];
let sum = numbers11.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);  // Output: 15

