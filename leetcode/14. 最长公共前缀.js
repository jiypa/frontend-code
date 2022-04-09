/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let lcp = '', flag = 0, pos, str;
    let min = strs[0].length;
    let indexs = new Set();

    // 将数组转换为Map对象，详情参考链接：https://blog.csdn.net/jingtian678/article/details/94365296
    let strMap = new Map(strs.map((v, k) => [k, v.length]));
    
    strMap.forEach((v, k) => {
        if (v <= min) {
            min = v;
            pos = k;
        }
    });

    // 找到最短字符串
    str = strs[pos];
    // 删去原素组中找到的最短字符串，方便后续比较
    strs.splice(pos, 1);

    // JS中判断数组为空的最有效的方法
    if (strs.length === 0) {
        lcp += str;
    } else {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < strs.length; j++) {
                if (strs[j][i] === str[i]) {
                    flag = 1;
                    indexs.add(i);
                } else {
                    flag = 0;
                    indexs.delete(i);
                    break;
                }
            }
            if (flag === 0) {
                break;
            }
        }
    
        for (const i of indexs) {
            lcp += str[i];
        }
    }

    return lcp;
};

console.log(longestCommonPrefix(["a"]));