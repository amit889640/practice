// var countBits = function (n) {
//     let op = [];
//     for (let i = 0; i <= n; i++) {
//         let count = 0;
//         let n = i;
//         while (n) {
//             if (n % 2 == 1) {
//                 count++;
//             }
//             n = parseInt(n / 2);
//         }
//         op.push(count);
//     }
//     return op;
// };

var countBits = function (n) {
    let op = [0];
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            op[i] = op[parseInt(i / 2)];
        } else {
            op[i] = op[parseInt(i / 2)] + 1;
        }
    }
    return op;
};




console.log(countBits(5));