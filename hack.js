// function help(n, k = 1) {
//     n = n.toString()
//     let arr = []
//     for (let i = 0; i < k; i++) {
//         let newArr = n.split("")
//         arr.push(...newArr)
//     }
//     return arr.reduce((a, b) => parseInt(a) + parseInt(b))
// }

// function superDigit(n, k) {
//     // Write your code here
//     let num = help(n, k)
//     while (num >= 10) {
//         num = help(num)
//     }
//     return num
// }

// console.log(superDigit(456, 5));


// let num = 567

// console.log(num[0]);


// function minimumBribes(q) {
//     // Write your code here
//     let num = 0
//     let mainNum = 0
//     for (let i = 0, j = i + 1; i < q.length; j++) {
//         if (q[i] > q[j]) {
//             num++
//             mainNum++
//         }
//         if (num > 2) {
//             console.log("Too chaotic")
//             return
//         }
//         if (j >= q.length - 1) {
//             i++
//             j = i
//             num = 0
//         }
//     }
//     console.log(mainNum)
// }

function newMethod(q) {
    let mainNum = 0
    for (let i = 0; i < q.length; i++) {
        let num = 0
        for (let j = i + 1; j < q.length; j++) {
            if (q[i] > q[j]) {
                num++
                mainNum++
            }
            if (num > 2) {
                console.log("Too chaotic")
                return
            }
        }
    }
    console.log(mainNum)
}

// minimumBribes([2, 1, 5, 3, 4])
newMethod([2, 1, 5, 3, 4])
// minimumBribes([2, 5, 1, 3, 4])
newMethod([2, 5, 1, 3, 4])




