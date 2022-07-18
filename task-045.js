function remuveduplicat(array) {
    let set = new Set(array)
    Array.from(set)
}
console.log(remuveduplicat([1,2,3,2,1,4,5,6,41,25]));