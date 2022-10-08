// 后置运算符和前置运算符
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(`a:${a} b:${b} c:${c} d:${d}`)

// 赋值结果
let a2 = 2
let x = 1 + (a2 *= 2)
console.log(`a2:${a2} x:${x}`)

// 类型转换
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);