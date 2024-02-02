var minLength = function (s) {
    if (s.includes('AB') || s.includes('CD')) {
        return minLength(s.replace(/AB|CD/gi, ''));
    } else {
        return s.length;
    }
};

console.log(minLength('ABFCACDB'));