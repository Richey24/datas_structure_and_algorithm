class Dictionary {
    constructor() {
        this.data = new Array()
    }
    add(key, value) {
        this.data[key] = value
    }
    find(key) {
        return this.data[key]
    }
    count() {
        let n = 0
        const list = Object.keys(this.data)
        for (let i = 0; i < list.length; i++) {
            n++
        }
        console.log(n)
    }
    clear() {
        const list = Object.keys(this.data)
        for (let i = 0; i < list.length; i++) {
            delete this.data[list[i]]
        }
    }
    showSorted() {
        const list = Object.keys(this.data).sort()
        for (let i = 0; i < list.length; i++) {
            console.log(list[i], 'number is', this.data[list[i]])
        }
    }
    remove(key) {
        delete this.data[key]
    }
    showAll() {
        const list = Object.keys(this.data)
        for (let i = 0; i < list.length; i++) {
            console.log(list[i], 'number is', this.data[list[i]])
        }
    }
}

const pbook = new Dictionary()
pbook.add('Rejoice', '09048694563')
pbook.add('Sad', '0473333333')
pbook.add('Best', '0474758593333')

pbook.showAll()
pbook.showSorted()
pbook.count()