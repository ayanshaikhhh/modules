// ---------------------------------------------Async Function-----------------------------------------
// 1. Async Function
// JavaScript में async keyword का मतलब होता है कि ये function asynchronous तरीके से काम करेगा।
// async function हमेशा एक Promise return करता है।





// async function add(a,b) {
//     return "Hello JS";
// };
// add().then(result => console.log(result) );
// // यहाँ myFunc() अपने आप promise return कर रहा है।














// ---------------------------------------------Await Keyword----------------------------------------
// 2. Await Keyword
// await सिर्फ async function के अंदर use किया जा सकता है।
// ये किसी promise के result का wait करता है, मतलब code execution उस line पर pause हो जाता है जब तक promise settle (resolve/reject) न हो।
// इससे asynchronous code लिखना synchronous जैसा आसान हो जाता है।






// function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Data mil gaya"),3000);
//     });
// }

// async function getData() {
//     console.log("fetching data.....");

//     let result =await fetchData(); 
//     console.log(result);

//     console.log("Process complete")
// }
// getData();




