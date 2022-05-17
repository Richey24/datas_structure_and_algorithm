function test(num, k) {
    let arr = num.splice(num.length - k, num.length - 1)
    console.log(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        num.unshift(arr[i])
    }
    console.log(num);
}

test([1, 2, 3, 4, 5, 6, 7], 3)