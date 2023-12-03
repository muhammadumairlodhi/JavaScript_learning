
        let Promises = new Promise((resolve, reject) => {
            alert("hi, there")
            resolve(546);
            reject(67);
        })

        console.log("hello world1!");
        setTimeout(() => {
            console.log("hello world 2 after 2 second");
        }, 2000);
        console.log("hello world 3");
        console.log(Promises);


   