// 首字母大写
function ucFirst(str) {
    if (str) {
        return str.toUpperCase()[0] + str.slice(1, str.length);
    }
    return str;
}

console.log(ucFirst("hello"));

// 检查 spam
function checkSpam(str) {
    if (!str) {
        return false;
    }
    let lowStr = str.toLowerCase();

    return lowStr.includes("viagra") || lowStr.includes("xxx");
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

// 截断文本
function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength) + "...";
}

console.log(truncate("012345678901234567890123456789", 20));
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// 提取货币
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}

console.log(extractCurrencyValue('$120'))