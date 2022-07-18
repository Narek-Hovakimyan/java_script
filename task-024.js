function serchMax(array) {
       let max =  array.sort((a,b)=>b-a)
       return max[0]
    }
    console.log(serchMax([85,412,564,21,58,69,5,47]));
    