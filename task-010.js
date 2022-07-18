function foo(number) {
    let array = []
    if (number%2 === 0) {
        array.push(number)
    }
    return array
}
console.log(foo(12));