function cloneArray(array) {
       let clone =  array.filter(item=>{
        return item
       })
       return clone
    }
    console.log(cloneArray([85,412,564,21,58,69,5,47]));