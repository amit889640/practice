/**
 * Given two strings, S1 and S2, the task is to find the length of the Longest Common Subsequence, i.e. longest subsequence present in both of the strings. 
 Input: S1 = “AGGTAB”, S2 = “GXTXAYB”
Output: 4
Explanation: The longest subsequence which is present in both strings is “GTAB”.

Input: S1 = “BD”, S2 = “ABCD”
Output: 2
Explanation: The longest subsequence which is present in both strings is “BD”.
 */


function lcs(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        let j = 0;
        while (j < s2.length) {
            if (s1[i] == s2[j]) {
                count++;
                s1 = s1.slice(i, s1.length + 1);
                s2 = s2.slice(j, s2.length + 1);
                j = 0;
                i = 0;
                break;
            }
            j++;
        }
    }
    return count;
}
// console.log(lcs('GXTXAYB', 'AGGTAB'));
// console.log(lcs('BD', 'ABCD'));


// Cant possible with above solution

// By dp


function lcsDp(s1, s2, i, j, dp) {
    if (dp[i] && dp[`${i}-${j}`]) {
        return dp[`${i}-${j}`];
    }

    if (s1.length == i || s2.length == j) {
        return 0;
    };
    if (s1[i] == s2[j]) {
        ans = 1 + lcsDp(s1, s2, i + 1, j + 1, dp)
    } else {
        ans = Math.max(lcsDp(s1, s2, i + 1, j, dp), lcsDp(s1, s2, i, j + 1, dp));
    }
    dp[`${i}-${j}`] = ans;
    return ans;
}

console.log(lcsDp('GXTXAYB', 'AGGTAB', 0, 0, {}));

