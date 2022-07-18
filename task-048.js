function ischeck(array) {
   return Array.isArray(array) ? true : false
}
console.log(ischeck([123]));



function ischeck(value) {
    return value instanceof Array ? true : false
   }
   console.log(ischeck([123]));
   