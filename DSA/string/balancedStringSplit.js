// 15 min
var balancedStringSplit = function (s) {
    let count = 0;
    let countR = 0;
    let countL = 0;
    for (const e of s) {
        if (e == 'R') countR++;
        if (e == 'L') countL++;
        if (countL == countR) {
            count++;
            countL = 0;
            countR = 0;
        }
    }
    return count;
};


console.log(balancedStringSplit('LLLLRRRR')); 