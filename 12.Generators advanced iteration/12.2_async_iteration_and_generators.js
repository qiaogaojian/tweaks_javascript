// 异步Generator
async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

async function counter() {
    let generator = generateSequence(1, 5);
    for await (let v of generator) {
        console.log(v);
    }
}

counter();