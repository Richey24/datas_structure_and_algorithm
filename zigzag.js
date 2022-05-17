function zigzag(arr, n) {
    let sortedArr = arr.sort((a, b) => a - b)
    let mid = Math.floor((arr.length - 1) / 2)
    let newArr = []
    newArr[mid] = sortedArr.pop()
    newArr[0] = sortedArr.shift()
    newArr[n - 1] = sortedArr.shift()
    let newMid = mid
    while (sortedArr.length > 0) {
        mid--
        newArr[mid] = arr.pop()
        newMid++
        newArr[newMid] = arr.pop()
    }
    return newArr
}

console.log(zigzag([2, 3, 1, 4, 5, 7, 8, 9, 6], 9));
