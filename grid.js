function grid(n, m, memo = {}) {
    const key = n + ',' + m
    if (key in memo) return memo[key]
    if (n == 0 || m == 0) return 0
    if (n == 1 && m == 1) return 1

    memo[key] = grid(n, m - 1, memo) + grid(n - 1, m, memo)
    return memo[key]
}

console.log(grid(3, 3));
console.log(grid(18, 18));