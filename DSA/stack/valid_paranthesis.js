var isValid = function (s) {
    let i = 0;
    let stack = [];
    let bracketMap = {
        '}': '{',
        ')': '(',
        ']': '[',
    }
    while (i < s.length) {
        if (bracketMap[s[i]] && bracketMap[s[i]] == stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
        i++;
    }
    return !stack.length;
};

console.log(isValid("()[]{}"));
console.log(isValid("{[]}"));