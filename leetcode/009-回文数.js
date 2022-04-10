/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = [], strRev = [], flag = 1;

    for (const item of x.toString()) {
        str.push(item);
        strRev.unshift(item);
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== strRev[i]) {
            flag = 0;
        }
    }

    if (flag === 1) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(-121));