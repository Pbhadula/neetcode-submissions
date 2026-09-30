class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        let set = new Set(nums);

        let longest=0;

        for(let num of set){
            if(!set.has(num-1)){
                let currentStreak=1;
                let currentNum = num

                while(set.has(currentNum+1)){
                    currentNum += 1;
                    currentStreak += 1;
                }

                longest=Math.max(longest,currentStreak);
            }
        }
        return longest;
    }
}
