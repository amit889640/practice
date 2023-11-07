function anagram(str1, str2) {
    return cleanString(str1) == cleanString(str2);
}

function cleanString(str) {
    return str.replace(/[w^]/, "").split('').sort().join('');
}


console.log(anagram('amit kumar', 'kmaru tima'));