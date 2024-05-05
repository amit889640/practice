function result(n, arr) {
    let arr2 = JSON.parse(JSON.stringify(arr));
    arr.sort((a, b) => a - b);
    let unMatched1 = -1;
    let unMatched2 = -1;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] != arr[i]) {
            if (unMatched1 != -1) {
                unMatched2 = i;
            } else {
                unMatched1 = i;
            }
        }
    }
    if (unMatched1 == -1 && unMatched2 == -1) {
        return -1;
    }
    console.log(`${unMatched1} ${unMatched2}`);
    return `${unMatched1} ${unMatched2}`
}

result(10, [11, 13, 14, 18, 15, 16, 17, 19, 20, 23, 26]);