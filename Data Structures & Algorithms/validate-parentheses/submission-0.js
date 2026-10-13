class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            let ch = s[i];
            
            // If it's an opening bracket, push it onto the stack
            if (ch === "{" || ch === "[" || ch === "(") {
                stack.push(ch);
            } else {
                // If it's a closing bracket, check if stack is empty first
                if (stack.length === 0) {
                    return false;
                }
                
                let top = stack[stack.length - 1]; // Peek at the top element

                // Check for matching pairs and pop
                if (ch === "}" && top === "{") {
                    stack.pop();
                } else if (ch === "]" && top === "[") {
                    stack.pop();
                } else if (ch === ")" && top === "(") {
                    stack.pop();
                } else {
                    return false; // Mismatched brackets
                }
            }
        }
        
        // If the stack is empty, all brackets matched successfully
        return stack.length === 0;
    }
}