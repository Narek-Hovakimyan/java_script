function arrayClone(array) {
    let newArray = array.slice()
    return newArray
  }
  console.log(arrayClone([1,2,3,2,1,4,5,6,41,25]));