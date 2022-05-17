class Sorting {
    constructor(num) {
        this.num = num
        this.data = []
        this.pos = num
        this.gap = [5, 3, 1]
        for (let i = 0; i < num; i++) {
            this.data[i] = Math.floor(Math.random() * (num + 1))
        }
    }

    setGap(arr) {
        this.gap = arr
    }

    clear() {
        for (let i = 0; i < this.num; i++) this.data[i] = 0
    }

    insert(element) {
        this.data[this.pos++] = element
    }

    swap(arr, index1, index2) {
        let temp = index1
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    toString() {
        let res = ''
        for (let i = 0; i < this.data.length; i++) {
            res += this.data[i] + ' '
        }
        return res
    }

    bubbleSort() {
        let len = this.data.length
        for (let outer = len; outer >= 2; outer--) {
            for (let inner = 0; inner <= outer - 1; inner++) {
                if (this.data[inner] > this.data[inner + 1]) {
                    this.swap(this.data, inner, inner + 1)
                }
            }
        }
    }

    selectionSort() {
        let min;
        for (let outer = 0; outer <= this.data.length - 1; outer++) {
            min = outer
            for (let inner = outer + 1; inner < this.data.length - 1; inner++) {
                if (this.data[inner] < this.data[min]) {
                    min = inner
                }
            }
            this.swap(this.data, outer, min)
        }
    }

    insertionSort() {
        let temp;
        let inner;
        for (let outer = 1; outer <= this.data.length - 1; outer++) {
            temp = this.data[outer]
            inner = outer
            while (inner > 0 && (this.data[inner - 1] >= temp)) {
                this.data[inner] = this.data[inner - 1]
                inner--
            }
            this.data[inner] = temp
        }
    }

    shellSort() {
        for (let g = 0; g < this.gap.length; g++) {
            for (let i = this.gap[g]; i < this.data.length; i++) {
                let temp = this.data[i]
                for (var j = i; j >= this.gap[g] && (this.data[j - this.gap[g]] > temp); j -= this.gap[g]) {
                    this.data[j] = this.data[j - this.gap[g]]
                }
                this.data[j] = temp
            }
        }
    }

    quickSort(arr) {
        if (arr.length < 2) return []
        let small = []
        let large = []
        let pivot = arr[0]

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) small.push(arr[i])
            else large.push(arr[i])
        }
        return this.quickSort(small).concat(pivot, this.quickSort(large))
    }
}

module.exports = Sorting