// 1
function multiply () {
    let res = 1
    for (let i = 0; i < arguments.length; i++) {
        res *= arguments[i]
    }
    return arguments.length > 0 ? res : 0
}

console.log(multiply(1, 2, 3))

// 2

function factorial (n) {

    if ( n <= 0 ) {
        return 1
    } else {
        return (n * factorial(n - 1))
    }

}

console.log(factorial(10))

// 3

function reverseString (str) {
    let res = ''
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}

console.log(reverseString('test'))

// 4

function stringToUnicode (str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i) + ' '
    }
    return res
}

console.log(stringToUnicode('hello'))

// 5

function printChars(str) {
    if (str.length > 0) {
        console.log(str.slice(0, 1))
        return printChars(str.slice(1))
    }
}

printChars('test')
