class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix=[];
        let suffix=[];

        prefix[0] =1;
        for(let i=1; i<nums.length; i++){
            prefix[i]=prefix[i-1]*nums[i-1];
        }

        suffix[nums.length-1]=1;
        for(let i=nums.length-2; i>=0; i--){
            suffix[i] = suffix[i+1]*nums[i+1]
        }

        for(let i=0; i<nums.length; i++){
            nums[i] = suffix[i]*prefix[i]
        }

        return nums
    }
}


// 1, 1, 2, 8
// 48, 24, 6 ,1 