// 函数对象属性和闭包最大的不同就是如果 count 的值位于外层（函数）变量中，
// 那么外部的代码无法访问到它，只有嵌套的函数可以修改它。

function makeCounter() {
    makeCounter.count = 0;
    return function () {
        return ++makeCounter.count;
    }
}

let counter = makeCounter();
for (let i = 0; i < 10; i++) {
    console.log(counter());
}

makeCounter.count = 999;
console.log(counter());