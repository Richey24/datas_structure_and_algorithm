class HashTable {
    constructor() {
        this.table = new Array(137)
        this.value = []
    }

    hashFunc(data) {
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i)
        }
        return total % this.table.length
    }

    betterHash(data) {
        let H = 37
        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i)
        }
        total = total % this.table.length
        if (table < 0) {
            total += this.table.length - 1
        }
        return parseInt(total)
    }

    put(key, data) {
        let pos = this.betterHash(key)
        if (this.table[pos] == undefined) {
            this.table[pos] = key
            this.value[pos] = data
        } else {
            while (this.table[pos] != undefined) {
                pos++
            }
            this.table[pos] = key
            this.value[pos] = data
        }
    }

    get(key) {
        let hash = -1
        hash = this.betterHash(key)
        if (hash > -1) {
            for (let i = hash; this.table[hash] != undefined; i++) {
                if (this.table[hash] == key) {
                    return this.value[hash]
                }
            }
        }
        return undefined
    }

    showAll() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(this.table[i] + ' : ' + this.value[i]);
            }
        }
    }

    //For Integer

    getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    getStuData(arr) {
        for (let i = 0; i < arr.length; i++) {
            let num = ""
            for (let j = 1; j <= 9; j++) {
                num += Math.floor(Math.random() * 10)
            }
            num += this.getRandomInt(50, 100)
            arr[i] = num
        }
    }

    printStuData(int) {
        let students = new Array(int)
        this.getStuData(students)
        for (let i = 0; i < students.length; i++) {
            console.log(students[i].substring(0, 8) + ' ' + students[i].substring(9));
        }
    }
}

const table = new HashTable()

table.put('sad', 'rejoice')
console.log(table.get('sad'))
console.log(table.showAll());

