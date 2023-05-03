// Strings

let string = 'some test string'
console.log(string[0], string[string.length - 1])

console.log(string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase())

console.log(string.indexOf('string'))

console.log(string.lastIndexOf(' '))

console.log(string.substring(4, 8))

console.log(string.substring(5, 9))

console.log(string.substring(string.length - 6))

let a = 20;
let b = 16;
console.log(a + '' + b)

//Numbers

console.log(Math.PI.toFixed(2))

console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51) + ' ' + Math.min(15, 11, 16, 12, 51, 12, 13, 51))

console.log(Math.random().toFixed(2))

console.log((Math.random() * 100).toFixed(0))

console.log(parseInt('100$'))

//Objects

const obj = {
    phone: 'iphone',
}

obj.price = 1000
obj.currency = 'dollar'

obj.details = {
    model: 'x',
    color: 'black'
}

console.log(obj)