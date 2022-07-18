function foo(nums) {
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i++) {
      if(nums[i] === nums[i+1]){
        nums.splice(i,1)
      } 
    }
     return nums
  }
  console.log(foo([1,2,3,2,1,4,5,6,41,25]));