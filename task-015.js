function foo(array1,array2) {
    let uniq = new Set(array1.concat(array2))
    return Array.from(uniq)
}
console.log(foo([1,2,3,1,2,5,4,6,7],[1,2,3,45,6,5,4,5,7,5,1,2]));