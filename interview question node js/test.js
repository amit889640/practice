// const add = (function () {
//     let counter = 0;
//     return function () { counter += 1; return counter }
// });

// console.log(add()())
// console.log(add()())
// // console.log(outer())


const outer = (function () {
    let c = 0;
    return function () { c += 1; return c }
})()


console.log(outer())
console.log(outer())
console.log(outer())

// function counter() {
//     let a = 1;
//     function inner() {
//         a = a + 1;
//         return a;
//     }
// }


// console.log(counter()());
// console.log(counter()());
// console.log(counter()());