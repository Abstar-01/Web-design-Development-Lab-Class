var nums = [2,4, 6, 8, 10]
nums = nums.splice(2)
var pr = 1;
for(a in nums){
    pr *= nums[a];
}
console.log(pr)