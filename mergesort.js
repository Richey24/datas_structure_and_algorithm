function mergeArray(arr, startleft, stopleft, startright, stopright) {
    const rightArr = new Array(stopright - startright + 1)
    const leftArr = new Array(stopleft - startleft + 1)
    let k = startright
    for (let i = 0; i < (rightArr.length - 1); i++) {
        rightArr[i] = arr[k]
        k++
    }
    k = startleft
    for (let i = 0; i < (leftArr.length - i); i++) {
        rightArr[i] = arr[k]
        k++
    }
    rightArr[rightArr.length - 1] = Infinity
    leftArr[leftArr.length - 1] = Infinity
    let m = 0
    let n = 0
    for (k = startleft; k < stopleft; k++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m]
            m++
        } else {
            arr[k] = rightArr[n]
            n++
        }
    }
}
const mergeSort = (arr) => {
    console.log(arr);
    if (arr.length < 2) {
        return
    }
    let step = 1
    let left;
    let right;
    while (step < arr.length) {
        left = 0
        right = step
        while (right + step <= arr.length) {
            mergeArray(arr, left, left + step, right, right + step)
            left = right + step
            right = left + step
        }
        if (right < arr.length) {
            mergeArray(arr, left, left + step, right, arr.length)
        }
        step *= 2
    }
}

const list = [2,24,5,1,3,43,2,4,2,46,7,75,4,3,5]
console.log(list);
mergeSort(list)
console.log(list);