//Multiple Base Conversion

let list = []

function numBase(num, base) {
    do {
        list.push(num % base)
        num = Math.floor(num /= base)
    } while (num > 0);
    let convert = ""
    while (list.length > 0) {
        convert += list.pop()
    }
    return convert
}

let test = numBase(125, 8)

console.log(test)