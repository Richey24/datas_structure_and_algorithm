function maxProfit(price) {
    let left = 0
    let right = 1
    let maxP = 0
    while (right < price.length) {
        if (price[left] < price[right]) {
            let profit = price[right] - price[left]
            maxP = Math.max(maxP, profit)
        } else {
            left = right
        }
        right++
    }
    return maxP
}

function bfMaxProfit(price) {
    let min = Math.min(...price)
    let newArr = price.splice(min, price.length - 1)
    let max = Math.max(...newArr)
    let total = max - min
    return total
}

console.log(maxProfit([3, 5, 6, 2, 1, 7, 8, 5]));
console.log(bfMaxProfit([3, 5, 6, 2, 1, 7, 8, 5]));