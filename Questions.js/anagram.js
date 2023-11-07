function anagram(s1, s2) {
    let s1Freq = charFreq(s1);
    let s2Freq = charFreq(s2);
    if (Object.keys(s1Freq).length != Object.keys(s2Freq).length) {
        return false;
    }
    for (let c in s1Freq) {
        if (s1Freq[c] != s2Freq[c]) {
            return false;
        }
    }
    return true

}

function charFreq(s) {
    const freq = {};
    for (let c of s.replace(/[^\w]/g,'').toLowerCase()) {
        freq[c] =freq[c]&& ++freq[c] || 1;
    }
    return freq;
}

console.log( anagram("daaz v", "aaz d v"));