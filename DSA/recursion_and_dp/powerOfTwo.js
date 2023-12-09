// function powerOfTwo(n) {
//     if (n == 1) {
//         return 2;
//     }
//     let x = powerOfTwo(Math.floor(n / 2));
//     if (n % 2 != 0) {
//         return 2 * x * x;
//     }
//     return x * x;
// }


function powerOfTwo(n) {
    if (n == 1) {
        return 2;
    }
    return 2 * powerOfTwo(n - 1);
}


console.log(powerOfTwo(4));