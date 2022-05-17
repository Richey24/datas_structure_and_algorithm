// function dynamic(n) {
//     let arr = [0, 1]
//     for (let i = 2; i < n + 1; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     console.log(arr[arr.length - 1])
// }
// dynamic(500)

// function lastfb(n) {
//     let last = 1
//     let next = 1
//     let total = 0
//     for (let i = 2; i < n; i++) {
//         total = next + last
//         next = last
//         last = total
//     }
//     console.log(total)
// }

// lastfb(500)

// function twoSum(tar, arr) {
//     for (i = 1, j = 0; i < arr.length; j++) {
//         if (arr[i] + arr[j] === tar) {
//             console.log(arr[i], arr[j]);
//             return
//         }
//         if (j >= arr.length - 1) {
//             i++
//             j = i
//         }
//     }
//     console.log("not found");
// }

// twoSum(5, [5, 6, 2, 4, 3])

function gridChallenge(grid) {
    // Write your code here
    let newGrid = help(grid)
    let arr = []
    for (let i = 0, j = 0; j < newGrid[0].length; i++) {
        console.log(j);
        console.log(i);
        arr.push(newGrid[i][j])
        if (arr.length == newGrid.length) {
            let newArr = arr.reduce((a, b) => a + b)
            let sortedArr = arr.sort().reduce((a, b) => a + b)
            console.log(newArr, sortedArr);
            if (newArr != sortedArr) {
                return "NO"
            }
        }
        if (i >= newGrid.length - 1) {
            j++
            i = -1
            arr = []
        }
    }
    return "YES"
}

function help(grid) {
    let arr;
    for (let i = 0; i < grid.length; i++) {
        arr = grid[i].split("")
        grid[i] = arr.sort().reduce((a, b) => a + b)
    }
    console.log(grid);
    return grid
}

console.log(gridChallenge(['abc', 'lmp', 'qrt']))
console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']))
console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv']))
// console.log(gridChallenge(['uxf', 'vof', 'hmp']))
// console.log(gridChallenge(['kc', 'iu']))