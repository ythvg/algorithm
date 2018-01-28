function Vertext(label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        process.stdout.write(i + '->');
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] !== undefined) {
                process.stdout.write(this.adj[i][j] + ' ');
            }
        }
        console.log('');
    }
}

// 深度优先搜索
function dfs(v) {
    this.marked[v] = true;

        // console.log('debug: ' +this.adj[v]);

    if (this.adj[v] !== undefined) {
        console.log('Visited vertex: ' + v);
    }

    for (var w = 1; w < this.adj[v].length; ++w) {
        if (!this.marked[this.adj[v][w]]) {
            this.dfs(this.adj[v][w]);
        }
    }
}

// 广度优先搜索
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (this.adj[v] !== undefined) {
            console.log('Visisted vertex: ' + v);
        }
        for (var w = 1; w < this.adj[v].length; ++w) {
            if (!this.marked[this.adj[v][w]]) {
                this.marked[this.adj[v][w]] = true;
                queue.push(this.adj[v][w]);
            }
        }
    }
}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
// g.dfs(0);
g.bfs(0);
