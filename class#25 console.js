
  
  console.clear()//clear in console
console.log("I am boy.");//log
console.error("An error is occurred!");//error
console.warn("You have a last warning");//warning
console.info("This is an important message")//Display a message in console
let data={
  name: 'Umair',
  city : 'Bhalwal',
  age : "16 years",
}
console.table(data)//data in table form
let a = 10 ;
console.assert(a > 45,'number should greater than 10');//flase
const num = 10;
console.assert(num < 20, 'Number should be greater than 20');//ture
for (var i = 0; i < 5 ; i++) {
 console.count( 'message')
}
 console.group('Group 1')
 console.log ('message 1')
 console.log('massage2');
console.groupEnd()

console.groupCollapsed('collapsed group')
console.log("message 1");
console.log('message 2');
console.groupEnd()

console.time("timer")

console.timeEnd("timer")

function foo() {
 function bar() {
   console.trace('Trace');
 }
 bar();
}
foo();

const obj = { name: 'John', age: 30 };
console.dir(obj);

const element = document.querySelector('div');
console.dirxml(element);

console.profile('Profile');
// Perform some operations to profile
console.profileEnd();

console.timeStamp('Marker');

console.memory();

