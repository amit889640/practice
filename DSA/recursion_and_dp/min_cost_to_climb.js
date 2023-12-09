// minimum cost to climb
// you have to reach the top floor with minimum cost.
// price[6]=[0,3,2,5,1,4]
// can jump to 1,2,3
// result cost of reaching the top floor is 6/5 2+4


function minWay(n, price) {
    if (n == 0) return price[0];
    if (n < 0) return Number.POSITIVE_INFINITY;
    return price[n] + Math.min(...[minWay(n - 1, price), minWay(n - 2, price), minWay(n - 3, price)])
}


let dp = {};
function minWayDP(n, price) {
    if (n == 0) return price[0];
    if (n < 0) return Number.POSITIVE_INFINITY;
    if (dp[n]) {
        return dp[n];
    }
    dp[n] = price[n] + Math.min(minWayDP(n - 1, price), minWayDP(n - 2, price), minWayDP(n - 3, price))
    return dp[n];
}

console.log(minWayDP(5, [0, 3, 2, 5, 1, 4]));