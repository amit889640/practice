class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(val) {
        if (!this.adjacencyList[val]) {
            this.adjacencyList[val] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
        if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1);
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => {
            this.removeEdge(vertex, v);
        });
        delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();

graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(2, 4);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 2);
graph.addEdge(3, 4);
graph.addEdge(5, 4);
graph.removeVertex(2);
console.log(graph);

