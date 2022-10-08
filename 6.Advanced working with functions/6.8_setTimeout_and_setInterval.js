function printNumbers(from, to) {
    let number = from;

    function go() {
        if (number <= to) {
            console.log(number++)
        } else {
            clearInterval(interval)
        }
    }

    go()
    let interval = setInterval(go, 1000);
}

printNumbers(1, 10);


function printNumbers2(from, to) {
    let number = from;

    function go() {
        if (number <= to) {
            console.log(number++)
            setTimeout(go, 1000);
        }
    }
    console.log(number++)
    setTimeout(go, 1000);
}

printNumbers2(1, 10);
