class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [...nums];
        let n = nums.length;

        for(let i=0; i<nums.length; i++) {
            ans[i+n]=nums[i]
        }
        return ans
    }
}
