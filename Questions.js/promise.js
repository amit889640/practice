function add(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (a + b);
        }, 1000);
    })
}

function mul(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (a * b);
        }, 1000);
    })
}




// add(2, 3).then((val) => {
//     mul(val, 2).then((mulVal) => {
//       console.log(mulVal);  
//     })
// })


async function operation() {
    const addVal = await add(2, 3);
    const mulVal = await mul(addVal, 2);
    console.log(mulVal);
}

operation();