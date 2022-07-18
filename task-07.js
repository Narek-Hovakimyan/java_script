function foo(array) {
        let result = []
        for (let i = array.length; i > 0; i--) {
            let elem = array.pop()
    
            result.push(elem)
        }
        return result
    }
    console.log(foo([1, 3, 5, 7, 9]));