// let getData1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('1 is resolved');
//     }, 1000)
// })

// let getData2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('2 is resolved');
//     }, 2000)
// })

// let getData3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('3 is rejected');
//     }, 3000)
// })


// async function showData() {
//     let data1 = await getData1;
//     let data2 = await getData2;
//     // let data3 = await getData3;
//     // console.log(data1);
//     // console.log(data2);

//     let p = await Promise.allSettled([data1, data2,
//         // data3
//     ]);
//     console.log(p);

//     // try {
//     // } catch (error) {
//     //     console.log('error in 3');
//     // }
// }

// showData();
// Promise.all([Promise.resolve(1), Promise.resolve(2)]).then((r) => console.log(r))

const express = require('express')