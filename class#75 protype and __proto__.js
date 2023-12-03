
        let a = {
            name: "umair",
            lan: "JavaScript",
            run: () => {
                alert("self run")
            }
        }
        console.log(a);
        let p = {
            run: () => {
                alert("run")
            }
        }
        p.__proto__ = {
            name2: "Ali",
            lan2: "HTML",
        }
        a.__proto__ = p
        a.run()
        console.log(a.name2);
  