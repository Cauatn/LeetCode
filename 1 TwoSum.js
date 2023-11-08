/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    ht = new Map();

    for(i in nums){
        if(ht.has(target - nums[i])){
            return [i,ht.get(target - nums[i])];
        }

        ht.set(nums[i], i)
        /*
            console.log("sd")
            console.log(...ht.entries());
         */
    }

    

};

//console.log(twoSum([2,11,7,15], 9));
