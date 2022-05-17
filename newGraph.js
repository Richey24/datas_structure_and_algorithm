class Graph {
    constructor(obj) {
        this.obj = obj
    }

    dfs(head) {
        const stack = [head]
        while (stack.length > 0) {
            let current = stack.pop()
            console.log(current);
            for (let n of this.obj[current]) {
                stack.push(n)
            }
        }
    }

    recur(head) {
        const stack = [head]
        let current = stack.pop()
        console.log(current);
        for (let n of this.obj[current]) {
            this.recur(n)
        }
    }

    undirectedRecur(arr, src, set) {
        const head = this.edgeToGraph(arr)
        if (set.has(src)) return
        set.add(src)
        console.log(src);
        for (let n of head[src]) {
            this.undirectedRecur(arr, n, set)
        }
    }
    undirectedHasPath(arr, src, tar, set) {
        const head = this.edgeToGraph(arr)
        if (set.has(src)) return false
        set.add(src)
        if (src === tar) return true
        for (let n of head[src]) {
            if (this.undirectedHasPath(arr, n, tar, set)) return true
        }
        return false
    }

    bfs(head) {
        const queue = [head]
        while (queue.length > 0) {
            let current = queue.shift()
            console.log(current);
            for (let n of this.obj[current]) {
                queue.push(n)
            }
        }
    }

    hasPath(src, tar) {
        const stack = [src]
        while (stack.length > 0) {
            let current = stack.pop()
            if (current === tar) return true
            for (let n of this.obj[current]) {
                stack.push(n)
            }
        }
        return false
    }

    edgeToGraph(arr) {
        this.obj = {}

        for (let stuff of arr) {
            let [a, b] = stuff
            if (!(a in this.obj)) this.obj[a] = []
            if (!(b in this.obj)) this.obj[b] = []
            this.obj[a].push(b)
            this.obj[b].push(a)
        }
        return this.obj
    }

    connectedCount(obj) {
        let count = 0
        let visited = new Set()
        for (let n in obj) {
            if (this.explore(obj, n, visited)) {
                count++
            }
        }
        return count
    }

    explore(obj, src, set) {
        if (set.has(String(src))) return false
        set.add(String(src))
        for (let n of obj[src]) {
            this.explore(obj, n, set)
        }
        return true
    }

    largestSize(obj) {
        let count = 0
        let visited = new Set()
        for (let n in obj) {
            let size = this.exploreSize(obj, n, visited)
            if (size > count) {
                count = size
            }
        }
        return count
    }

    exploreSize(obj, src, set) {
        if (set.has(String(src))) return 0
        set.add(String(src))
        let num = 1
        for (let n of obj[src]) {
            num += this.exploreSize(obj, n, set)
        }
        return num
    }

    shortPath(arr, src, tar) {
        const obj = this.edgeToGraph(arr)
        const stack = [[src, 0]]
        const visited = new Set([src])
        while (stack.length > 0) {
            const [current, distance] = stack.pop()
            if (current === tar) return distance
            for (let n of obj[current]) {
                if (!(visited.has(n))) {
                    visited.add(n)
                    stack.push([n, distance + 1])
                }
            }
        }
        return -1
    }

    islandCount(grid) {
        let visited = new Set()
        let count = 0
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (this.exploreIsland(grid, i, j, visited)) {
                    count++
                }
            }
        }
        return count
    }

    exploreIsland(grid, i, j, visited) {
        let rowInbound = 0 < i && i < grid.length
        let colInbound = 0 < j && j < grid[0].length
        if (!rowInbound || !colInbound) return false

        if (grid[i][j] === "w") return false

        let pos = i + ',' + j

        if (visited.has(pos)) return false

        visited.add(pos)

        this.exploreIsland(grid, i - 1, j, visited)
        this.exploreIsland(grid, i + 1, j, visited)
        this.exploreIsland(grid, i, j - 1, visited)
        this.exploreIsland(grid, i, j + 1, visited)

        return true
    }
    smallIslandCount(grid) {
        let visited = new Set()
        let count = Infinity
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                let size = this.exploreSmallIsland(grid, i, j, visited)
                if (size > 0 && size < count) {
                    count = size
                }
            }
        }
        return count
    }

    exploreSmallIsland(grid, i, j, visited) {
        let rowInbound = 0 < i && i < grid.length
        let colInbound = 0 < j && j < grid[0].length
        if (!rowInbound || !colInbound) return 0

        if (grid[i][j] === "w") return 0

        let pos = i + ',' + j

        if (visited.has(pos)) return 0

        visited.add(pos)
        let size = 1
        size += this.exploreIsland(grid, i - 1, j, visited)
        size += this.exploreIsland(grid, i + 1, j, visited)
        size += this.exploreIsland(grid, i, j - 1, visited)
        size += this.exploreIsland(grid, i, j + 1, visited)

        return 1
    }
}

const grid = [
    ['w', 'w', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['l', 'l', 'l', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w'],
    ['l', 'w', 'l', 'l', 'w'],
    ['l', 'l', 'w', 'w', 'w']
]

const obj = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const arr = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

const con = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

const newObj = new Graph(obj)

// console.log(newObj.largestSize(con))
// console.log(newObj.shortPath(arr, 'i', 'm'))
console.log(newObj.smallIslandCount(grid))
// console.log(newObj.undirectedRecur(arr, 'i', new Set()))
// console.log(newObj.undirectedHasPath(arr, 'i', 'z', new Set()))
// newObj.dfs('a')
// newObj.bfs('a')
// newObj.recur('a')
// console.log(newObj.hasPath('a', 'z'))