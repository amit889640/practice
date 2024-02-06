// var generate = function (numRows) {
//     op = [[1]];
//     for (let i = 1; i <= numRows; i++) {
//         let tempArr = [];
//         for (let j = 0; j <= i; j++) {
//             let l = j - 1;
//             let r = j;
//             lv = 0;
//             rv = 0;
//             if (op[i - 1][l]) lv = op[i - 1][l];
//             if (op[i - 1][r]) rv = op[i - 1][r];
//             tempArr.push(lv + rv)
//         }
//         op.push(tempArr);
//     }
//     return op;
// };

// console.log(generate(6)) 



function fibbo(n) {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    return fibbo(n - 1) + fibbo(n - 2);
}

console.log(fibbo(4));