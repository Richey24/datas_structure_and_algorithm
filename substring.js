function lcs(w1, w2) {
    let max = 0
    let index = 0
    let arr = new Array(w1.length).fill(new Array(w1.length).fill(0))
    
    for(let i=0; i<w1.length; i++) {
        for(let j=0; j<w2.length; j++) {
            if(i==0 || j==0) {
                arr[i][j] = 0
            } else {
                if(w1[i-1] == w2[j-1]) {
                    arr[i][j] = arr[i-1][j-1] + 1
                } else {
                    arr[i][j] = 0
                }
            }
            if(max < arr[i][j]) {
                max = arr[i][j]
                index = i
            }
        }
    }
    let str = ''
    if(max == 0) {
        return ''
    } else {
        for(let i=index-max; i<=max; i++) {
            str += w2[i]
        }
        return str
    }
}
console.log(lcs('happy', 'pappy'))