// 1 - Soma

function sumCheck(){
    index = 13
    sum = 0
    k = 0
    
    while(k < index){
        k++
        sum = sum + k
    }
    
    return ("A soma é: " + sum)
}

module.exports = sumCheck