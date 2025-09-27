// let promi = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let  age = 20;
//         if(age > 18 ) {
//             resolve("successfully");
//         } else {
//             reject("faileddd");
//         }
//     }, 2000);
// }) 


// promi.then((data) => {
//     console.log(data);
// })

// .catch((err) => {
//     console.log(err);
// })







// myPromise
// .then((result) => {
//     console.log
// })








let promi = new Promise((resolve,reject) => {
    setTimeout(() => {
        let age = 18;

        if(age>18) {
            resolve("success");
        } else {
            reject("failed");
        }
        
    }, 2000);

})



promi.then((suc) => {
    console.log(suc)

}).catch((fail) => {
    console.log(fail)

});


console.log("hello");
