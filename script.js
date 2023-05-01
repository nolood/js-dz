const task1 = () => {

    let string = 'some test string'
    console.log(string[0], string[string.length - 1])

    console.log(string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase())

    console.log(string.indexOf('string'))

    console.log(string.lastIndexOf(' '))

    console.log(string.substring(5, 9))

    console.log(string.substring(string.length - 6))

    let a = 20;
    let b = 16;
    console.log(a + '' + b)


//     Numbers

    console.log(Math.PI.toFixed(2))

    console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51) + ' ' + Math.min(15, 11, 16, 12, 51, 12, 13, 51))

    console.log(Math.random().toFixed(2))

    console.log((Math.random() * 100).toFixed(0))

    console.log(parseInt('100$'))




//     Objects

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
}

const task2 = () => {

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

    let reverseString = 'tseb eht ma i'
    res = ''

    for (let i = reverseString.length - 1; i >= 0; i--) {
        res += reverseString[i]
    }
    console.log(res)

    res = 1;

    for (let i = 10; i > 0; i--) {
        res *= i
    }

    console.log(res)

    res = 'Считаем до 10: '
    for (let i = 1; i <= 10; i++) {
        i !== 10 ? res += `${i},` : res += i
    }

    console.log(res)

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


    for (let i = 1; i <= 15; i ++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }



}


const task3 = () => {

//     functions

    function multiply () {
        let res = 1
        for (let i = 0; i < arguments.length; i++) {
            res *= arguments[i]
        }
        return arguments.length > 0 ? res : 0
    }

    console.log(multiply(1, 2, 3))

    function factorial (n) {

        if ( n <= 0 ) {
            return 1
        } else {
            return (n * factorial(n - 1))
        }

    }

    console.log(factorial(10))


    function reverseString (str) {
        let res = ''
        for (let i = str.length - 1; i >= 0; i--) {
            res += str[i]
        }
        return res
    }

    console.log(reverseString('test'))

    function stringToUnicode (str) {
        let res = ''
        for (let i = 0; i < str.length; i++) {
            res += str.charCodeAt(i) + ' '
        }
        return res
    }

    console.log(stringToUnicode('hello'))

    function printChars(str) {

        if (str.length > 0) {
            console.log(str.slice(0, 1))
            return printChars(str.slice(1))
        }
    }

    printChars('test')

}

const task4 = () => {

//     Arrays

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


    function lastEl(arr) {
        return arr[arr.length - 1]
    }

    console.log(lastEl([1, 2, 3, 4, 5, 6]))


    function fillArr(n) {
        let res = []
        for (let i = 1; i <= n; i++) {
            res.push(i)
        }
        return res
    }

    console.log(fillArr(10))

    function changeCollection() {
        let res = []
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].shift()
            res.push(arguments[i])
        }
        return res
    }

    console.log(changeCollection([1, 123, 423, 654], ['asda', 'dasdas', 'dasdad']))


    function sortStrings(str) {
        return Array.from(str).sort().reverse()
    }

    console.log(sortStrings('vnsdsolasdakvmxcp'))


    function sortNums(nums) {
        return nums.sort((a, b) => b - a)
    }


    console.log(sortNums([1, 2, 3, 12, 31, 23, 123, 12, 31, 23, 12, -123, -123, 1, -2, 3]))

    function getNewArray(arr, n1, n2) {
        return arr.splice(n1, n2 - 1)
    }

    console.log(getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4))


    function doubleArray(arr) {
        return arr.concat(arr)
    }

    console.log(doubleArray(['one', 2, 'three', 4]))

    let arr = [1, 2, 3, 4, 5]
    console.log(arr.filter((i, index) => index !== 1 && index !== 2))
    let arr2 = [1, 2, 3, 4, 5]
    arr2[1] = 'three'
    arr2[2] = 'four'
    console.log(arr2)

    let arr3 = ['i', 'am', 'an', 'array']
    arr3.splice(3, 0, 'awesome')
    console.log(arr3)

    let arr4 = [[1], [1, 23], [12], [123, 132, 123], [321, 34]]

    console.log(arr4.sort((prev, next) => prev.length - next.length))
}






























































