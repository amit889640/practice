// function searchMaze

function isSafe(newX, newY, visited, arr, n) {
    if (newX >= 0 && newX < n && newY >= 0 && newY < n && visited[newX][newY] != 1 && arr[newX][newY] == 1) {
        return true;
    }
    return false;
}

function solve(x, y, arr, n, ans, visited, path) {

    if (x == n - 1 && y == n - 1) {
        ans.push(path);
        console.log(ans);
        return;
    }
    visited[x][y] = 1;
    // Down
    if (isSafe(x + 1, y, visited, arr, n)) {
        solve(x + 1, y, arr, n, ans, visited, path + 'D');
    }
    // left
    if (isSafe(x, y - 1, visited, arr, n)) {
        solve(x, y - 1, arr, n, ans, visited, path + 'L');
    }
    // right
    if (isSafe(x, y + 1, visited, arr, n)) {
        solve(x, y + 1, arr, n, ans, visited, path + 'R');
    }
    // up
    if (isSafe(x - 1, y, visited, arr, n)) {
        solve(x - 1, y, arr, n, ans, visited, path + 'U');
    }
    visited[x][y] = 0;
}


function searchMaze(arr, n) {
    let ans = [];
    let visited = Array(n).fill().map(() => Array(n).fill(0));
    let path = '';

    ans = solve(0, 0, arr, n, ans, visited, path);
    console.log(ans);
    return ans;
}

let arr = [
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
]
searchMaze(arr, 4)