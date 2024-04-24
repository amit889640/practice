const arr = [
    () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(`pp`);
            }, 1000);
        })
    },

    () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(`pp2`);
            }, 2000);
        })
    },

    () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(`pp3`);
            }, 5000);
        })
    }
]


// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(await element());
// }

for await (let prms of arr) {
    await prms();
    console.log()
}