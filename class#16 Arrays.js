
let numbers = [1, 2, 3, 4, 5, 6, "Absent", true]
console.log(numbers);// it will print[1, 2, 3, 4, 5, 6, 'Absent', true]
console.log(numbers[0]);//1
console.log(numbers[1]);//2
console.log(numbers[2]);//3
console.log(numbers.length);  // Output:8
numbers[0] = 0//it will change the numbers
console.log(numbers);
numbers[8] = 7//it will adding the numbers
console.log(numbers);
console.log(numbers.length);//Output:9
console.log(typeof numbers);
let number2 = [1, 2, 3, 4, 5, 6, "Absent", true, null]


for (let i = 0; i < number2.length; i++) {
  console.log(number2[i]);
}



