// 1

let str = 'I am in the easycode'
let res = ''

for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
        res += str[i].toUpperCase()
    } else {
        res += str[i]
    }
}

console.log(res)

// 2

let reverseString = 'tseb eht ma i'
res = ''

for (let i = reverseString.length - 1; i >= 0; i--) {
    res += reverseString[i]
}
console.log(res)

// 3

res = 1;

for (let i = 10; i > 0; i--) {
    res *= i
}

console.log(res)

// 4

res = 'Считаем до 10: '

for (let i = 1; i <= 10; i++) {
    i !== 10 ? res += `${i},` : res += i
}

console.log(res)

// 5

str = 'JavaScript is a pretty good language'
res = ''

for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' && str[i] !== ' ') {
        res += str[i].toUpperCase()
    } else if (str[i] !== ' '){
        res += str[i]
    }
}

console.log(res)

// 6

for (let i = 1; i <= 15; i ++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}