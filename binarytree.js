class Nodes {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    depthFirstSearch(root) {
        if (root === null) return []
        const stack = [root]
        const arr = []
        while (stack.length > 0) {
            const current = stack.pop()
            arr.push(current.value)
            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)
        }
        return arr
    }

    breathFirstSearch(root) {
        if (root === null) return []
        const stack = [root]
        const arr = []
        while (stack.length > 0) {
            const current = stack.shift()
            arr.push(current.value)
            if (current.left) stack.push(current.left)
            if (current.right) stack.push(current.right)
        }
        return arr
    }

    recurDepthSearch(root) {
        if (root == null) return []
        const leftVal = this.recurDepthSearch(root.left)
        const rightVal = this.recurDepthSearch(root.right)
        return [root.value, ...leftVal, ...rightVal]
    }
}

const a = new Nodes('a')
const b = new Nodes('b')
const c = new Nodes('c')
const d = new Nodes('d')
const e = new Nodes('e')
const f = new Nodes('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(a.breathFirstSearch(a));
console.log(a.depthFirstSearch(a));
console.log(a.recurDepthSearch(a));