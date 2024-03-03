// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

const createAdjList = (edges) => {
    const list = {};
    edges.forEach((e) => {
        list[e[0]] && list[e[0]].push(e[1]) || (list[e[0]] = [e[1]]);
        list[e[1]] && list[e[1]].push(e[0]) || (list[e[1]] = [e[0]]);
    })
    return list;
}


var validPath1 = function (n, edges, source, destination) {
    const list = createAdjList(edges);
    const visited = [];
    const stack = [source];
    visited[source] = true;

    while (stack.length) {
        const current = stack.pop();
        if (current === destination) return true;
        for (let vertex of list[current]) {
            if (!visited[vertex]) {
                stack.push(vertex);
                visited[vertex] = true;
            }
        }
    }

    return false;
}

const p = {
    1: [2, 3],
    2: [1, 4],
    3: [2, 5],
    4: [5],
}

var validPath = function (n, edges, source, destination) {
    const list = createAdjList(edges);
    const stack = [source];
    let current;
    let visited = [];
    while (stack.length) {
        current = stack.pop();
        if (current == destination) {
            return true;
        }
        for (v of list[current]) {
            if (!visited[v]) {
                stack.push(v);
                visited[v] = true;
            }
        }
    }
    return false;
}


console.log(validPath1(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9))