// Longest Substring Without Repeat

function sub(s) {
    let charSet = new Set()
    let left = 0
    let res = 0
    for (let r = 0; r < s.length; r++) {
        while (charSet.has(s[left])) {
            charSet.delete(s[left])
            left++
        }
        charSet.add(s[r])
        res = Math.max(res, r - left + 1)
    }
    return res
}

console.log(sub('abdacacda'));