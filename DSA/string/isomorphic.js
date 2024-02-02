var isIsomorphic = function (s, t) {
    function checkIso(s, t) {
        let map = {}
        let set = new Set()
        for (let i = 0; i < s.length; i++) {
            if (map[s[i]] && map[s[i]] != t[i]) {
                return false;
            }
            // if(map[s[i]])
            if (!map[s[i]]) {
                map[s[i]] = t[i];
                set.add(map[s[i]]);
                continue;
            }
        }
        return true;
    }
    return checkIso(s, t) && checkIso(t, s);
};



// console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));



// 2024 2040
