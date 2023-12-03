
    //map

    let numbers = [1, 2, 3, 4, 5]
      let a = numbers.map((value, index, numbers) => {
      console.log(value, index, numbers);
      return value * 8
    })
    console.log(a);
    //foreach
    let number = [1, 2, 3, 4, 5]
    number.forEach((value, index) => {
      console.log(value, index, number);
    });
    //filter
    let num = [1, 2, 3, 4, 5]
    let e = num.filter((a1) => {
      return a1 < 2
    })
    console.log(e);
    //reduce
    let numbe = [1, 2, 3, 4, 5]
    let c = numbe.reduce((u1, u2) => {
      return u1 + u2// we can do " * / - "
    })
    console.log(c);
