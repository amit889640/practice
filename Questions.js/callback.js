function add(a, b) {
    setTimeout(() => {
        console.log(a + b);
        return a + b;
    }, 1000);
}

function mul(a, b) {
    setTimeout(() => {
        return a * b;
    }, 1000);
}


function  operation(a, b,callback) {
    callback(a, b);
}

console.log(operation(2,3,add))