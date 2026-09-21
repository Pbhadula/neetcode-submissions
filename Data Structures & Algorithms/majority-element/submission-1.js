class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let max=0;
        let me;

        for(let i=0;i<nums.length; i++) {
            if(max==0){
                me=nums[i]
            }
            if(nums[i]==me){
                max++
            } else {
                max--
            }
        }
        return me
    }
}
