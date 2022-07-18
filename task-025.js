function serchMax(array) {
    let min =  array.sort((a,b)=>b-a)
    return Math.min(...min)
 }
 console.log(serchMax([85,412,564,21,58,69,5,47]));
 