function help(a) {
    if (a.toUpperCase() === a && a.toLowerCase() === a) {
        return 4
    } else if (a.toUpperCase() === a) return true
}

function caesarCipher(s, k) {
    // Write your code here
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arr = s.split("")
    for (let i = 0; i < s.length; i++) {
        let helper = help(arr[i])
        if (helper != 4) {
            if (!helper) {
                let index = alpha.indexOf(s[i])
                if (alpha[index + k] != undefined) {
                    arr[i] = alpha[index + k]
                } else {
                    newIn = alpha.length - index
                    arr[i] = alpha[k - newIn]
                }
            } else {
                let index = alpha.indexOf(s[i].toLowerCase())
                if (alpha[index + k] != undefined) {
                    arr[i] = alpha[index + k].toUpperCase()
                } else {
                    newIn = alpha.length - index
                    arr[i] = alpha[k - newIn].toUpperCase()
                }
            }
        }
    }
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}


console.log(caesarCipher("middle-Outz", 2))