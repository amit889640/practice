function getLongestPalin(s) {
    frequencies = Object.values(getFrequency(s));
    console.log(frequencies);

}

function getFrequency(str) {
    freqStr = {};
    for (c of str) {
        freqStr[c] = freqStr[c] ? ++freqStr[c] : 1;
    }
    return freqStr;
}

getLongestPalin('asdffaad')

// console.log( getFrequency('asdffaad'));


// Online Java Compiler
// Use this editor to write, compile and run your Java code online

// class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println(HelloWorld.longestPalindrome("aaabbc"));
//     }

//        public  static int longestPalindrome(String s) {
//         int[] count = new int[128];
//         for (char c: s.toCharArray())
//             count[c]++;

//         int ans = 0;
//         for (int v: count) {
//             ans += v / 2 * 2;
//             if (ans % 2 == 0 && v % 2 == 1)
//                 ans++;
//         }
//         return ans;
//     }
// }