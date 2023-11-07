function charFreq(st) {
    const chars = {};
    for (let char of st) {
        if (char == ' ') { 
            continue;
        }
        chars[char] && chars[char]++ || (chars[char] = 1);
    }
    return chars;
}

function maxCommon(st) {
    const freq = charFreq(st);
    let maxNum = 0;
    let maxChar = ''
    for (const f in freq) {
        if (freq[f] >maxNum) {
            maxNum = freq[f];
            maxChar = f;
        }
    }
    return {maxChar,maxNum};
}

console.log(maxCommon("hello world this is javascript"));