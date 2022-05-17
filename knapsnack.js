

function knap(capacity, size, value) {
    let load = 0
    let i = 0
    let w = 0
    while (load < capacity && i < 4) {
        if (size[i] <= capacity - load) {
            w += value[i]
            load += size[i]
        } else {
            let r = (capacity - load) / size[i]
            w += r * value[i]
            load += size[i]
        }
        i++
    }
    return w
}
let value = [50, 140, 60, 60]
let size = [5, 20, 10, 12]
let capacity = 30
console.log(knap(capacity, size, value))