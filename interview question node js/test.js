function mul(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a * b);
        }, 1000);
    })
}

function add(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(a + b);
        }, 1000);
    })
}

(async () => {

    // mul(1, 2).then((r) => {
    //     add(r, 5).then((ar) => {
    //         console.log(ar);
    //     })
    // })

    let mulR = await mul(1, 2);
    let addR = await add(mulR, 5);
    console.log(addR);
})()
