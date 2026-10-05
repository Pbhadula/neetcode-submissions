class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;

        let ma=0;

        while(left<right){
            let ca = (right-left) * (Math.min(heights[left], heights[right]))

            ma = Math.max(ma,ca);

            if(heights[left]<heights[right]) {
                left++
            } else {
                right--
            }
        }
        return ma;
    }
}
