let array = [85,412,564,21,58,69,5,47]
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1 - i; j++) {
    if(array[j]> array[j+1]){
     let item = array[j]
     array[j] = array[j + 1];
     array[j + 1] = item
    }
  }
}
console.log(array);
// }