
Array.prototype.myFilter = function (callBack) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if(callBack(this[i])){
            result.push(this[i],i,this)
          }
        }
        return result 
  }
  let array = [1,2,3,4,5,6,7,8,9]
  let newArray = array.myFilter(item=>item%2=== 0)
  console.log(newArray);