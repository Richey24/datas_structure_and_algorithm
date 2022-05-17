function Nod(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.count = 1
    this.show = show
}

function show() {
    return this.data
}

function bst() {
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.find = find
}

function insert(data) {
    const n = new Nod(data, null, null)
    if (this.root == null) {
        this.root = n
    } else {
        let current = this.root
        let parent
        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current == null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ")
        inOrder(node.right)
    }
}

function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left)
        preOrder(node.right)
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show() + " ");
    }
}

function getMin(root) {
    let current = root
    while (!(current.left == null)) {
        current = current.left
    }
    return current.data
}
function getMax(root) {
    let current = root
    while (!(current.right == null)) {
        current = current.right
    }
    return current.data
}

function find(root, data) {
    let current = root
    while (current.data != data) {
        if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
        if (current == null) {
            return null
        }
    }
    return current.data
}

function removeNode(root, data) {
    if (root == null) return root

    if (data < root.data) root.left = removeNode(root.left, data)
    else if (data > root.data) root.right = removeNode(root.right, data)
    else {
        if (root.left == null) return root.right
        else if (root.right == null) return root.left

        root.data = getMin(root.right)
        root.right = removeNode(root.right, root.data)
    }
    return root
}

function remove(root, data) {
    return removeNode(root, data)
}

function update(root, data) {
    let grade = find(root, data)
    grade.count++
    return grade
}

const num = new bst()
num.insert(23)
num.insert(45)
num.insert(16)
num.insert(37)
num.insert(3)
num.insert(99)
num.insert(22)

inOrder(num.root)
remove(num.root, 45)
inOrder(num.root)