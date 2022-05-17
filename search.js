const Sorting = require('./sorting')
const sort = new Sorting()
class Search {
    constructor(num) {
        this.list = new Array(num)
        this.arr = []
        for (let i = 0; i < this.list.length; i++) {
            this.arr.push(Math.floor(Math.random() * this.arr.length + 1))
        }
    }

    seqSearch(data) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == data) {
                if (i > 0) sort.swap(this.arr, i, i - 1)
                return true
            }
        }
        return false
    }

    index(data) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == data) return i
        }
        return -1
    }

    findMin() {
        let min = this.arr[0]
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] < min) min = this.arr[i]
        }
        return min
    }
    findMax() {
        let max = this.arr[0]
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] > max) max = this.arr[i]
        }
        return max
    }

    binarySearch(data) {
        var upperBound = this.arr.length - 1;
        var lowerBound = 0;
        let arr = sort.quickSort(this.arr)
        console.log(arr);
        while (lowerBound <= upperBound) {
            var mid = Math.floor((upperBound + lowerBound) / 2);
            if (arr[mid] < data) {
                lowerBound = mid + 1;
            }
            else if (arr[mid] > data) {
                upperBound = mid - 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    }
}

const test = new Search(100)
console.log(test.binarySearch(45));