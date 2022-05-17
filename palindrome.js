let list = []

function check(word) {
    for (let i = 0; i < word.length; i++) {
        list.push(word[i])
    }
    let result = ""
    while (list.length > 0) {
        result += list.pop()
    }
    if (result == word) {
        return true
    } else {
        return false
    }
}

console.log(check('ebube'))