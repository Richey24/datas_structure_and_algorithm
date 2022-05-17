//recursion
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))

//Stack Method
let num = []
function fact(n) {
    while (n > 1) {
        num.push(n--)
    }
    let result = 1
    while (num.length > 0) {
        result *= num.pop()
    }
    return result
}

console.log(fact(5));