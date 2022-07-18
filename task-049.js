let array1 = [1,2,3]
let array2 = [1,2,3,4,5,6];
let difference = array2.filter(item=> !array1.includes(item))
console.log(difference);
