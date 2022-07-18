
const employees = [
  {
    "firstName": "Arabela",
    "lastName": "Fockes",
    "email": "afockes0@wired.com",
    "salary": "$6.18",
    "isEngineer": true,
    "gender": "Female"
  },
  {
    "firstName": "Bryant",
    "lastName": "Marchi",
    "email": "bmarchi1@theatlantic.com",
    "salary": "$8.05",
    "isEngineer": true,
    "gender": "Male"
  },
  {
    "firstName": "Batholomew",
    "lastName": "Eim",
    "email": "beim2@goodreads.com",
    "salary": "$7.26",
    "isEngineer": true,
    "gender": "Male"
  },
  {
    "firstName": "Ritchie",
    "lastName": "Ferreira",
    "email": "rferreira3@booking.com",
    "salary": "$4.07",
    "isEngineer": true,
    "gender": "Male"
  },
  {
    "firstName": "Kaylyn",
    "lastName": "Ivain",
    "email": "kivain4@gmpg.org",
    "salary": "$5.89",
    "isEngineer": true,
    "gender": "Female"
  },
  {
    "firstName": "Wilhelmina",
    "lastName": "Portigall",
    "email": "wportigall5@plala.or.jp",
    "salary": "$2.06",
    "isEngineer": false,
    "gender": "Female"
  },
  {
    "firstName": "Rouvin",
    "lastName": "Gillcrist",
    "email": "rgillcrist6@aol.com",
    "salary": "$7.29",
    "isEngineer": true,
    "gender": "Male"
  },
  {
    "firstName": "Flemming",
    "lastName": "Scroggins",
    "email": "fscroggins7@msu.edu",
    "salary": "$7.54",
    "isEngineer": true,
    "gender": "Male"
  },
  {
    "firstName": "Sallee",
    "lastName": "Schlagh",
    "email": "sschlagh8@reuters.com",
    "salary": "$2.24",
    "isEngineer": true,
    "gender": "Female"
  },
  {
    "firstName": "Roxine",
    "lastName": "Bedo",
    "email": "rbedo9@whitehouse.gov",
    "salary": "$6.47",
    "isEngineer": true,
    "gender": "Male"
  }

];



// function foo(str) {
//   let newStr = ''
//   while(str){
//       newStr+= str.pop()
//   }
//   return newStr === str
// }
// console.log(foo('anna'));
// Array.prototype.myConcat = function (...args) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//       result.push(this[i])

//   }
//   for (let j = 0; j < args.length; j++) {
//       if (Array.isArray(args[j])) {
//           for (let n = 0; n < args[j].length; n++) {
//               result.push(args[j][n])
              
//           }
//       }else{
//           result.push[args[j]]
//       }
      
//   }
//   return result
// }
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let newg = arr1.myConcat(arr2)
// console.log(newg);
// Array.prototype.myPop = function (callBack) {
//   const result = [];
//  return result.push(this.slice(0,callBack-1))
// }

// const arr = [1,9,5];

// console.log(arr.myPop(arr));


// function ischeck(value) {
//  return value instanceof Array ? true : false
// }
// console.log(ischeck([123]));

Array.prototype.myIncludes = function (callBack) {
  for (let i = 0; i < this.length; i++) {
      if(callBack === this[i]){
          return true
      }
      
  }
  return false
}

let arr = [1,2,3,4,5,6]
console.log(arr.myIncludes(4));


// Array.prototype.myFilter = function (callBack) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//       if(callBack(this[i])){
//           result.push(this[i],i,this)
//         }
//       }
//       return result 
// }
// let array = [1,2,3,4,5,6,7,8,9]
// let newArray = array.myFilter(item=>item%2=== 0)
// console.log(newArray);
// let str = 'palindrvvrdnilap'
// function foo(str) {
//   let splitText = str.split('')
//   let reversedText = ''
//   for (let i = 0; i < Math.floor(splitText.length); i++) {
//         reversedText += splitText.pop()
//   if(splitText.length !== reversedText.length){
//       reversedText += splitText[splitText.length-1]
//   }
//   }
//   return reversedText === splitText.join('')
// }
// console.log(foo(str));
// // function foo(array, n) {
//   let first = array.slice(0,1)
//   let result =[];
//   for (let i = 0; i < array.length; i++) {
//       if(array[i] == first ){
//           result.push(n)
//       }
      
//   }
//   return result
// }
// console.log(foo([85,412,564,21,58,69,5,47],5));




// let array1 = [1,2,3]
// let array2 = [1,2,3,4,5,6];
// let difference = array2.filter(item=> !array1.includes(item))
// console.log(difference);



// function foo(nums) {
//   nums.sort((a,b)=>a-b)
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] === nums[i+1]){
//       nums.splice(i,1)
//     } 
//   }
//    return nums
// }
// console.log(foo([1,2,3,2,1,4,5,6,41,25]));

// function foo(array1,array2) {
//   let uniq = new Set(array1.concat(array2))
//   return Array.from(uniq)
// }
// console.log(foo([1,2,3,1,2,5,4,6,7],[1,2,3,45,6,5,4,5,7,5,1,2]));

// function isThereAnyEnginer(employees) {
//   return employees.some(employe=>employe.isEngineer === true )
// }
// console.log(isThereAnyEnginer(employees));

// function foo(array) {
//  return array.some(item=>item.gender === 'Female')
// }
// console.log(foo(employees));

// function foo(employees1, employees2) {
// employees1.push(...employees2)
//  return employees1
// }
// console.log(foo(['Arabela','Bryant', "Batholomew","Ritchie"],["Kaylyn","Wilhelmina", "Rouvin",]));



// let array = Array(100).fill(5)

// console.log(array);
// function foo(number) {
//   let array = []
//   if (number%2 === 0) {
//       array.push(number)
//   }
//   return array
// }
// console.log(foo(12));

// function isPalindrome(str) {
//   let newStr = ''
//   let array = str.split('')
//   // console.log(array);

//   for (let i = 0; i <= array.length-1; i++) {
    
//   }
//   return newStr === str
// }
// console.log(isPalindrome('azertyuio'));



// function foo(employe) {
//   return employe.map(item=>item.email).join(', ')
// }
// console.log(foo(employees));

// function foo(employe) {
//   let fullName = employe.map(item=>{
//     return `${item.email} ${item.salary}`  })
//   return fullName.toString()
// }
// console.log(foo(employees));


// for(var i=0; i<10; i++) {
//   setTimeout(function() {
//     alert(i);
//   }, 100);
// }

// "use strict"
// console.log(typeof null);
// function foo(employe) {
//   let j = employe.map(item=>item.firstName)
//  return j.sort(); 
// }
// console.log(foo(employees));
// function serchMax(array) {
//   let min =  array.sort((a,b)=>b-a)
//   return Math.min(...min)
// }
// console.log(serchMax([85,412,564,21,58,69,5,47]));



// function arrayClone(array) {
//   let newArray = array.slice()
//   return newArray
// }
// console.log(arrayClone([1,2,3,2,1,4,5,6,41,25]));
// let elements = [85,412,564,21,58,69,5,47]


// function foo(array,n) {
//  return array.indexOf(n)
// }
// console.log(foo(elements,1));




// function foo(array) {
//   let str = '//'
//   let f = null
//   return array.reduce((acc,cur)=>{
//     if (cur.email) {
//      f = cur.email + str
//     }
//     return acc+ f
//   },'')
// }

// console.log(foo(employees));




// console.log([12,45,42,1,55,32,56,89,7].indexOf(845));
// function foo(arg1,arg2) {
    
//     return arg1 = arg2.map(item=>{
//        arg1.push(item) 
//       })
    

 
// }
// console.log(foo([1,2,3,4],[5,6,7,8]));

// function foo(array) {
//   return array.every(el=>{
//     console.log(el.isEngineer);
//     return el.isEngineer
//   })
// }
// console.log(foo(employees));


// function foo(array) {
//   let g;
//   return array.every(el => {
//     g = el.salary.slice(1)
//     console.log(g);
//     return g>
//   })
// }
// console.log(foo(employees));


// function foo(employe) {
//   return employe.filter(item => {
//     let g = item.salary.slice(1)
//     console.log(g);
//     return g > 6.5
//   })
// }
// console.log(foo(employees));
// console.log('t');
// function clone(array) {
//     let arrayClone = Array.from(array)
//     return arrayClone
// }
// console.log(clone([1,2,3]));
// function remuveduplicat(array) {
// return Array.from(new Set(array))

// }
// console.log(remuveduplicat([1,2,3,2,1,4,5,6,41,25]));

// let str = 'foo'
// console.log(Array.from(str));

// function arrayClone(array) {
//   let newArray = array.slice()
//   return newArray
// }
// console.log(arrayClone([1,2,3,2,1,4,5,6,41,25]));


// function findName(array , name) {
//   let find = array.find(item=>{
//       return item.firstName === name
//   })
//   return find
// }
// console.log(findName(employees, 'Roxine'));

// function cloneMap(array) {
//   let map = array.map(item=>{
//       return item
//   })
//   return map
// }

// console.log(cloneMap([85,412,564,21,58,69,5,47]));
// debugger
// function serchName(employe) {
//   return employe.map(item=>{
//       return item.firstName
//   })
// }
// console.log(serchName(employees));

// function spaceToSymbol(symbol) {
//     this.split(' ').join(symbol)
// }
// let arr = [1,2,3,45,6]
// console.log(arr.slice(0,3));

// function foo(str) {
//   let newStr = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }
//   return newStr === str
// }
// console.log(foo('google:elgoog'));

// function stringIsPalindrome(str) {
//   return str.split('').reverse().join('') === str
// }
// console.log(stringIsPalindrome('popa'));
// let array = [1,2,3,4,5,5,1,4,2,3,1,5,6,7,8,6,7,9]

// function remuveDuplicade(array) {
//   let uniqArray = []
//     array.forEach((el,i )=> {

//     });
// }


// function some(arg) {
//   return (number) => {
//     if (number !== undefined) {
//       return some(arg + number)
//     } else {
//       return arg
//     }
//   }
// }
// console.log(some(5)(4)(4)(4)())


// function foo(number) {
//   foo.count = (foo.count || 0) + number;
//   return foo
// }
// const [count] = foo(1)(2)(5)(4)(3)


// function foo(array) {
//   let array = [85,412,564,21,58,69,5,47]
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length - 1 - i; j++) {
//         if(array[j]> array[j+1]){
//          let item = array[j]
//          array[j] = array[j + 1];
//          array[j + 1] = item
//         }
//       }
//     }
//     console.log(array);
// // }

// function foo(element) {
//   let lastElements = element.slice(-1)
//   return lastElements
// }
// console.log(foo([1,2,3,4,5,6,87,9,8,5,1,4,55]));