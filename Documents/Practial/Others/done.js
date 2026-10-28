function generateMultiples(x, n) {
    let result = []
    for(let i = x ; i <= n*x; i+=x){
        result.push(i)
    }
    return result
}
console.log(generateMultiples(3,7))