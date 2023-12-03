
     let arr = [1, 2, 3, 4, 5, 6, 7]
        //let [a, b] = arr
        //console.log(a,b);


        //let [a, b, c, d ,...rest] = arr
        //console.log(a, b, c, d ,rest);

       // let [a, , , ...rest] = arr
       // console.log(a, rest)
       //let {a, b}={a:1, b:45}
        //console.log(a,b)


        //spread operators
let arr2 = [1, 2, 3]
let object = {...arr2}
//console.log(object);

sum=(a, b, c) =>{
    return(a + b + c)
}
console.log(sum(...arr2));

let obj2 = {
    name: "joun",
    compuney:"xyz",
    address:"XYZ"

}
console.log({...obj2})                         
console.log({...obj2, name:"umair",address:"ABC"}); //changing the name componey and address

const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
console.log(d)

   