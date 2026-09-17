class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arrSet = new Set();

        for(let i=0; i<nums.length; i++) {
            if(arrSet.has(nums[i])){
                return true
            } else {
                arrSet.add(nums[i])
            }
        }
        return false;
    }
}
