function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

let counter = makeCounter();
for (let i = 0; i < 10; i++) {
    console.log(counter());
}