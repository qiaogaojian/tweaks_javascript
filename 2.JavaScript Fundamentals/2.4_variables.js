"use strict";

let user = "John";
let age = 25;
let message = "Hell0";

// 这里的``不是单引号 而是teb键的那个符号  还需要开启 "use strict"
console.log(`User: ${user} age: ${age} message: ${message}`);

/**
 * var 和 let的区别
 * 1.var 声明的变量没有块级作用域，它们仅在当前函数内可见，或者全局可见（如果变量是在函数外声明的）。
 * 2.var 声明的变量会在函数开头被定义，与它在代码中定义的位置无关, 人们将这种行为称为“提升”，因为所有的 var 都被“提升”到了函数的顶部。
 * 3.var（而不是 let/const！）声明的全局函数和变量会成为全局对象的属性
 */

let admin;
let firstName = "John";
admin = firstName;
console.log(admin);

// earth curReader

// BIRTHDAY age