Array.prototype.myIncludes = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        if(callBack === this[i]){
            return true
        }
        
    }
    return false
}

let arr = [1,2,3,4,5,6]
console.log(arr.myIncludes(4));