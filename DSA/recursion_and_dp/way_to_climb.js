// count the number of ways to to climb the stair
function wayToStep(n) {
    if (n == 0) return 1;
    if (n < 0) return 0;
    return wayToStep(n - 1) + wayToStep(n - 2) + wayToStep(n - 3);
}


console.log(wayToStep(4));