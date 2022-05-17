function matchBracket(str) {
    if (str.length < 2) throw new Error('Please Input Two Or More Bracket')
    let list = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '{' || str[i] == '(') {
            list.push(str[i])
        } else {
            let text = list.pop()
            if (!(text == '(' && str[i] == ')' || text == '[' && str[i] == ']' || text == '{' && str[i] == '}')) {
                return false
            }
        }
    }
    return true
}

console.log(matchBracket('{})'));