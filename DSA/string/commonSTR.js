
// let ans = '';
// function lcs(s1, s2, i, j) {
//     if (i == s1.length || j == s2.length) {
//         return '';
//     }

//     if (s1[i] == s2[j]) {
//         ans = s2[j] + lcs(s1, s2, i + 1, j + 1);
//     } else {
//         return ans;
//         ans = '';
//         if (lcs(s1, s2, i + 1, j).length > lcs(s1, s2, i, j + 1).length) {
//             ans = lcs(s1, s2, i + 1, j)
//         } else {
//             ans = lcs(s1, s2, i, j + 1)
//         }
//     }
//     return ans;
// }

// console.log(lcs('abcjklp', 'acjkp', 0, 0));
