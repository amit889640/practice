// var maxDepth = function (s) {
//     let c = 0;
//     let t = 0;
//     let max = 0;
//     let maxArr = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i - 1] == ')' && s[i] == '(' && c) {
//             max = Math.max(t, max);
//             c = c - t;
//             t = 0;
//             c = c + 1;
//         } else if (s[i] == '(') {
//             c = c + 1;
//         }
//         if (s[i] == ')') {
//             c = c - 1;
//             t = t + 1;
//             if (c == 0) {
//                 max = Math.max(t, max);
//                 t = 0;
//             }
//         }
//     }
//     return max;
// };


var maxDepth = function (s) {
    let openCount = 0;
    let maxArr = [0];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            openCount++;
        } else if (s[i] == ')') {
            maxArr.push(openCount)
            openCount--;
        }
    }

    return maxArr.sort((a, b) => b - a)[0];
}


console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
console.log(maxDepth('(1)+((2))+(((3)))'));
console.log(maxDepth('1'));
// c0t4