class LinkedList {
    constructor() {
        this.head = null; //First Element Of The List
        this.tail = null; //Last Element Of The List
    }

    append(value) {
        const newNode = { value: value, next: null, prev: this.tail }

        if (this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode
        if (!this.head) {
            this.head = newNode
        }
    }

    prepend(value) {
        const newNode = { value: value, next: this.head, prev: null }
        this.head.prev = newNode
        this.head = newNode

        if (!this.tail) {
            this.tail = newNode
        }
    }

    find(value) {
        if (!this.head) {
            return;
        }

        let curNode = this.head

        while (curNode) {
            if (curNode.value === value) {
                return curNode
            } else {
                curNode = curNode.next
            }
        }
        return null
    }

    insertAfter(value, afterValue) {
        const eNode = this.find(afterValue)

        if (eNode) {
            const newNode = { value: value, next: eNode.next, prev: eNode }
            eNode.next = newNode
            eNode.next.next.prev = eNode.next
        }
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }

        let curNode = this.head

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next
                curNode.next.prev = curNode.prev.next

            } else {
                curNode = curNode.next
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode
        }
    }

    toArray() {
        const elements = []
        let curNode = this.head
        while (curNode) {
            elements.push(curNode.value)
            curNode = curNode.next
        }
        return elements
    }
    reverseList() {
        const element = []
        let curNode = this.tail
        while (curNode) {
            element.push(curNode.value)
            curNode = curNode.prev
        }
        return element
    }
}

const list1 = new LinkedList

list1.append(1)
list1.append('Rejoice')
list1.append('Hello World')
list1.append(true)
list1.append(45.5)
list1.append('sad')
list1.delete(true)
list1.prepend(true)
list1.append(67)
list1.insertAfter('lame', 'sad')

const list = list1.toArray()
const reversedList = list1.reverseList()

function stuff() {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == reversedList[i]) {
            return i
        }
    }
    return null
}

console.log(list);
console.log(reversedList);
console.log(stuff());