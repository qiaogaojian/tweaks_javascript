"use strict";
/**
 * Optional chaining is currently not supported in Node.js version 13 and below.
 * It will be supported from Node.js version 14 and most of the browsers as it
 * is moved to Stage 4. Currently, few platforms are supporting it.
 * @type {{name: string, sayHi: user.sayHi}}
 */

let user = {
    name: "Michael",
    sayHi: function () {
        console.log(`Hi my name is ${this.name}`)
    }
};

console.log(user?.name);
user.sayHi?.();

console.log(user?.age);
user.sayHello?.();
