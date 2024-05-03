setImmediate(() => {
    console.log('setImm')
})
Promise.resolve().then(() => console.log(1));
queueMicrotask(() => {
    console.log(3)
    queueMicrotask(() => console.log(4));
})
setTimeout(() => console.log(2), 10);
console.log(5);
