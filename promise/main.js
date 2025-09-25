let promi = new Promise((resolve, reject) => {
    setTimeout(() => {
        let  age = 20;
        if(age > 18 ) {
            resolve("successfully");
        } else {
            reject("faileddd");
        }
    }, 2000);
}) 


promi.then((data) => {
    console.log(data);
})

.catch((err) => {
    console.log(err);
})



























