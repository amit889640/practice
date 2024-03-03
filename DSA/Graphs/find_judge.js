// 997. Find the Town Judge


// var findJudge = function (n, trust) {
//     const list = {};
//     for (t of trust) {
//         list[t[1]] && list[t[1]]++ || (list[t[1]] = 1);
//     }

//     for (key in list) {
//         if (list[key].length == n - 1) {
//             return key;
//         }
//     }
//     return -1
// };

var findJudge = function (n, trust) {
    const list = new Array(n + 1).fill(0);
    for (t of trust) {
        list[t[1]]++;
        list[t[0]]--;
    }
    for (let i = 1; i <= n; i++) {
        if (list[i] == n - 1) {
            return i;
        }
    }
    return -1;
};

// console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]));
console.log(findJudge(2, [[1, 2]]));
// console.log(findJudge(3, [[1, 3], [2, 3]]));