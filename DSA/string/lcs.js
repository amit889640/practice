function lcs(s1, s2, i, j) {
    if (i == s1.length || j == s2.length) {
        return 0;
    }
    if (s1[i] == s2[j]) {
        ans = 1 + lcs(s1, s2, i + 1, j + 1);
    } else {
        ans = Math.max(lcs(s1, s2, i, j + 1), lcs(s1, s2, i + 1, j));
    }

    return ans;
}



console.log(lcs('GXTXAYB', 'AGGTAB', 0, 0));