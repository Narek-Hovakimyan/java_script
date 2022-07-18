Array.prototype.myPop = function (callBack) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callBack) {
            result.push()
        }
        return result
    }
}

const arr = [1, 2, 3];
arr.myPop()
console.log(arr);