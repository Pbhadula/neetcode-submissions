class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let me1;
        let me2;

        let count1 = 0;
        let count2 = 0;

        let result = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == me1) {
                count1++;
            } else if (nums[i] == me2) {
                count2++;
            } else if (count1 == 0) {
                count1++;
                me1 = nums[i];
            } else if (count2 == 0) {
                count2++;
                me2 = nums[i];
            } else {
                count1--;
                count2--;
            }
        }

        count1 = count2 = 0;

        for (const num of nums) {
            if (num == me1) count1++;
            else if (num == me2) count2++
        }

        if(count1>Math.floor(nums.length/3)) result.push(me1)
        if(count2>Math.floor(nums.length/3)) result.push(me2)

        return result;
    }
}
