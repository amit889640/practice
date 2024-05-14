// let str2 = '';
// function checkPalin(str, mid, i) {
//     if (i > mid) {
//         console.log(str.slice(i - mid - 1, mid + i))
//         return true;
//     }
//     l = mid % 2 == 0 ? mid - i - 1 : mid - i;
//     r = mid + i;
//     if (str[l] == str[r]) {
//         return checkPalin(str, mid, ++i)
//     } else {
//         console.log(i)
//         console.log(mid)
//         console.log(str.slice(i - mid, mid + i))
//         return false;
//     }
// }
// let str = 'qaqabrabaq';
// let str = 'abaaba';
// console.log(checkPalin(str, 2, 0));
// console.log(checkPalin(str, parseInt(str.length / 2), 0));
// console.log(5 % 2)
// console.log(parseInt(str.length / 2))


// function allSubset(arr){

// }


// let ans = [];
// function lcs(s1, i) {
//     if (i == s1.length) {
//         return ans;
//     }
//     ans = 1 + lcs(s1, s2, i + 1, j + 1);
//     ans = Math.max(lcs(s1, s2, i, j + 1), lcs(s1, s2, i + 1, j));
//     return ans;
// }


// let ans = '';
// function lcs(s1, s2, i, j) {
//     if (i == s1.length || j == s2.length) {
//         return 0;
//     }
//     if (s1[i] == s2[j]) {
//         ans = s1[i] + lcs(s1, s2, i + 1, j + 1);
//     } else {
//         ans = Math.max(lcs(s1, s2, i, j + 1), lcs(s1, s2, i + 1, j));
//     }

//     return ans;
// }



// function checkPalind(str, mid, i) {
//     if (i > parseInt(str.length / 2)) {
//         return true;
//     }
//     if (str[mid - i] == str[mid + i]) {
//         return checkPalind(str, mid, i + 1)
//     } else {
//         return false;
//     }
//     return true;
// }
// let str = 'abaaba';

// console.log(checkPalind(str, parseInt(str.length / 2), 0))
// console.log(parseInt(str.length / 2))

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






// lcsubstr(s1,s2) {
//     let temp = '';
//     for (let i = 0; i < s1.length; i++) {
//         for (let j = 0; j < s2.length; j++) {
//             if(s1[i]==s2[j]){
//                 temp=temp+s1[i]
//             } else {

//             }

//         }
//     }
// // }
// let map = new Map()
// map.set('name', 'amit');

// map = undefined;
// console.log(map.get('name'))



let arr = [1, 2, 3, 4]

arr.__proto__.double = function (fun) {
    let temp = [];
    this.forEach(e => {
        temp.push(fun(e));
    });
    return temp;
}

console.log(arr.double((e) => {
    return e * 3;
})) 