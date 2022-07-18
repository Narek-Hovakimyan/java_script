function prefillArray(count,number) {
    let array = Array(count).fill(number)
    return array
}
console.log(prefillArray(100,100));