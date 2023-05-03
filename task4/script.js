// 1
function doubleValue (value) {
    let res = []

    for (let i = 0; i < value.length; i++) {
        if (i !== value.length - 1) {
            res.push(value[i])
        } else if (res.length !== value.length * 2 - 2){
            res.push(value[i])
            i = 0
        } else {
            res.push(value[i])
            break
        }
    }

    return res

}

console.log(doubleValue([1, 2, 3, 4, 5]))

// 2

function lastEl(arr) {
    return arr[arr.length - 1]
}

console.log(lastEl([1, 2, 3, 4, 5, 6]))

// 3

function fillArr(n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        res.push(i)
    }
    return res
}

console.log(fillArr(10))

// 4

function changeCollection() {
    let res = []
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].shift()
        res.push(arguments[i])
    }
    return res
}

console.log(changeCollection([1, 123, 423, 654], ['asda', 'dasdas', 'dasdad']))

// 5

function sortStrings(str) {
    return Array.from(str).sort().reverse()
}

console.log(sortStrings('vnsdsolasdakvmxcp'))

// 6

function sortNums(nums) {
    return nums.sort((a, b) => b - a)
}


console.log(sortNums([1, 2, 3, 12, 31, 23, 123, 12, 31, 23, 12, -123, -123, 1, -2, 3]))

// 7

function getNewArray(arr, n1, n2) {
    return arr.splice(n1, n2 - 1)
}

console.log(getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4))

// 8

function doubleArray(arr) {
    return arr.concat(arr)
}

console.log(doubleArray(['one', 2, 'three', 4]))

// 9

let arr = [1, 2, 3, 4, 5]
console.log(arr.filter((i, index) => index !== 1 && index !== 2))

// 10

let arr2 = [1, 2, 3, 4, 5]
arr2[1] = 'three'
arr2[2] = 'four'
console.log(arr2)

// 11

let arr3 = ['i', 'am', 'an', 'array']
arr3.splice(3, 0, 'awesome')
console.log(arr3)

// 12

let arr4 = [[1], [1, 23], [12], [123, 132, 123], [321, 34]]

console.log(arr4.sort((prev, next) => prev.length - next.length))

// 13

let arr5 = [1, 2, 3, 4, 5, 6, 7]
let arr5Copy = arr5.slice(0)

console.log(arr5Copy)

//14

let arrObj = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'intel', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'intel', info: {cores: 4, cache: 2}},
]

console.log(arrObj.sort((prev, next) => prev.info.cores - next.info.cores))

// 15

const products = [
    {title: 'prod1', price: 5.2}, {title: "prod2", price: 0.18},
    {title: 'prod3', price: 15}, {title: "prod4", price: 25},
    {title: 'prod5', price: 18.9}, {title: "prod6", price: 8},
    {title: 'prod7', price: 19}, {title: "prod8", price: 63},

]

// 16

function filterCollection(products, start, end) {
    let res = []

    for (let i = 0; i < products.length; i++) {
        if (products[i].price >= start && products[i].price <= end) {
            res.push(products[i])
        }
    }

    return res.sort((prev, next) => prev.price - next.price)
}

console.log(filterCollection(products, 15, 30))