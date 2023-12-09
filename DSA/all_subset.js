// generating all the subset of number in array

function allSubset(n, arr) {
    let finalArr = [];
    for (let i = 0; i < (1 << n); i++) {
        let tempArr = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) tempArr.push(arr[j]);
        }
        finalArr.push(tempArr);
    }
    return finalArr;
}

console.log(allSubset(3, [7, 8, 9]));