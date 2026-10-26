class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxCount = 0;
        let set = new Set();
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            // let currCount = 0;

            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            set.add(s[right]);

            maxCount = Math.max(maxCount, right - left + 1);
        }
        return maxCount;
    }
}
