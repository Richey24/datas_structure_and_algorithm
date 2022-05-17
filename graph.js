class Graph {
    constructor(v) {
        this.vertices = v
        this.edge = 0
        this.adj = []
        this.edgeTo = []
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = []
        }
        this.marked = []
        for (let i = 0; i < this.vertices; i++) {
            this.marked[i] = false
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edge++
    }

    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            console.log(i, "->");
            for (let j = 0; j < this.adj[i].length || 0; j++) {
                if (this.adj[i][j] != undefined) {
                    console.log(this.adj[i][j], " ");
                }
            }
        }
    }

    dfs(v) {
        this.marked[v] = true
        if (this.adj[v] != undefined) console.log('Visited vertex ' + v);
        let list = this.adj[v]
        list.map((w) => {
            if (!(this.marked[w])) this.dfs(w)
        })
    }

    bfs(s) {
        let queue = []
        this.marked[s] = true
        queue.push(s)
        while (queue.length > 0) {
            let v = queue.shift()
            if (v != undefined) console.log('Visited vertex ' + v);
            this.adj[v].map((w) => {
                if (!(this.marked[w])) {
                    this.edgeTo[w] = v
                    this.marked[w] = true
                    queue.push(w)
                }
            })
        }
    }

    hasPathTo(v) {
        return this.marked[v]
    }

    pathTo(v) {
        let s = 0
        if (!this.hasPathTo(v)) return undefined
        let path = []
        for (let i = v; i != s; i = this.edgeTo[i]) {
            path.push(i)
        }
        path.push(s)
        return path
    }
}

const test = new Graph(5)
test.addEdge(0, 1)
test.addEdge(0, 2)
test.addEdge(1, 3)
test.addEdge(2, 4)

test.showGraph()
test.bfs(0)
let sP = test.pathTo(3)

let res = ''
while (sP.length > 0) {
    if (sP.length > 1) res += (sP.pop() + '-')
    else { res += sP.pop() }
}
console.log(res);