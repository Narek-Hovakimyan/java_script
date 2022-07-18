function foo(array, n) {
    let first = array.sliice(0,1)
    let result =[];
    for (let i = 0; i < array.length; i++) {
        if(n === first){
            result.push(array[i])
        }
        
    }
    return result
}
console.log(foo([85,412,564,21,58,69,5,47],5));