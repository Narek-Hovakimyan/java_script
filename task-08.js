function foo(str) {
    let newStr = ''
    while(str){
        newStr+= str.pop()
    }
    return newStr === str
}
console.log(foo('anna'));