
    let a = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(789)
        }, 1000);
      })
    }
    ( async () => {
      console.time()
      let b = await a()
      console.log(b)
      let c = await a()
      console.log(c)
      let d = await a()
      console.log(d)

      console.log(b, c, d);

      console.timeEnd()
    }
     )()
    //console.log(b);

     //A async function will write  in a bracket and then call the bracket
