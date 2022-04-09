/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    let map = new Map([[')', '('], [']', '['], ['}', '{']]);
    
    if (s[0] === ')' || s[0] === ']' || s[0] === '}') {
        return false;
    } else {
        for (const item of s) {
            if (item === ')' || item === ']' || item === '}') {
                // 获取数组的最后一个元素
                if (stack[stack.length - 1] === map.get(item)) {
                    stack.pop();
                } else {
                    stack.push(item);
                }
            } else {
                stack.push(item);
            }
        }
    
        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
};
console.log(isValid("(])"));