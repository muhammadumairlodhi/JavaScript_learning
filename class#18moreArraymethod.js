
      //delete method
      let numbers=[1, 2, 3, 4, 5]
      console.log(numbers);//output:1, 2, 3, 4, 5
      console.log(numbers.lenght);//output:5
      delete numbers[0]
      console.log(numbers);//output: empty, 2, 3, 4, 5
      console.log(numbers.length);//output:5
      //sort method
      let num=[995, 1, 1332,2345, 3, 134, 4, 890, 5]
      num.sort( )
      console.log(num);  //output:1, 1332, 134, 2345, 3, 4, 5, 890, 995
      //sortby accending order
      let compare=(y, z)=>{
        return y - z             //z - y desending order
}
      let nums=[995, 1, 1332,2345, 3, 134, 4, 890, 5]
      nums.sort(compare)
      console.log(nums);

