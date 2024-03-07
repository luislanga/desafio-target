// 2 - Fibonacci

function fibonacciCheck(num) {
    let a = 0;
    let b = 1;

    if (num === 0) {
        return `O número ${num} FAZ parte da sequência Fibonacci`
    }

    while (b < num) {
        let temp = b
        b = a + b
        a = temp
    }

    if( b === num ){
        return `O número ${num} FAZ parte da sequência Fibonacci`
    }else {
        return `O número ${num} NÃO faz parte da sequência Fibonacci`
    }

    
}

module.exports = fibonacciCheck