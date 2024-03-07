// 5 - Inversor de string

function invertString(str){
    const strLength = str.length
    let invertedStr = ""
    for(let i = (strLength - 1); i>=0; i--){
        invertedStr += str[i]
    }
    return(`O inverso de '${str}' é: ` + invertedStr)
}

module.exports = invertString
