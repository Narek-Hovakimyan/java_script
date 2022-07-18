Array.prototype.myConcat = function (...args) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(this[i])

    }
    for (let j = 0; j < args.length; j++) {
        if (Array.isArray(args[j])) {
            for (let n = 0; n < args[j].length; n++) {
                result.push(args[j][n])
                
            }
        }else{
            result.push[args[j]]
        }
        
    }
    return result
}
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let newg = arr1.myConcat(arr2)
console.log(newg);