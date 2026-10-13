class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let countStack = [];
        let stringStack = [];
        let currentString = '';
        let k = 0;

        for (let i = 0; i < s.length; i++) {
            let c = s[i];

            if (!isNaN(c)) {
                // Build the number (handles multi-digit numbers like 100)
                k = k * 10 + parseInt(c, 10);
            } else if (c === '[') {
                // Push current state to stacks and reset for the inner block
                countStack.push(k);
                stringStack.push(currentString);
                k = 0;
                currentString = '';
            } else if (c === ']') {
                // Pop the count and the previous string
                let repeatCount = countStack.pop();
                let prevString = stringStack.pop();

                // Manual repetition loop (instead of .repeat())
                let repeatedString = '';
                for (let j = 0; j < repeatCount; j++) {
                    repeatedString += currentString;
                }

                // Combine with the previous string
                currentString = prevString + repeatedString;
            } else {
                // Regular character
                currentString += c;
            }
        }

        return currentString;
    }
}