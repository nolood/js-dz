// 1

//UNDEFINED - переменная не определена в этом месте
// getBigName(userName)
// function getBigName(name) {
//     name = name + ''
//     return name.toUpperCase()
// }
//
// var userName = 'Ivan'

// 2

function test() {
    var name = 'Vasiliy'
    return getBigName(userName)
}

function getBigName(name) {
    name = name + ''
    return name.toUpperCase()
}

var userName = 'Ivan'

test() //IVAN

// 3 *

var food = 'cucumber';

(function () {
    var food = 'bread'
    getFood()
})()

function getFood() {
    console.log(food) //cucumber
}

// 4

var dollar, getDollar;

(function () {
    var dollar = 0;
    getDollar = function () {
        return dollar;
    }
})()

dollar = 30

getDollar() //0

// 5

var greet = 'Hello';

(function () {
    var text = " World"
    console.log(greet + text) // hello world
})()

// console.log(greet + text) // Error

// Замыкания *

// 6 *


// 7 *

function MultiplyMaker (a) {
    let counter = a
    return function (n) {
        return counter *= n
    }
}

const multiply = MultiplyMaker(2)


// 8

let module = {
    string: null,
    setString: function (str) {
        if (!str) {
            this.string = ''
        } else {
            this.string = str + ''
        }
    },
    getString: function () {
        return this.string
    },
    getStringLength: function () {
        return this.string.length
    },
    getStringReverse: function () {
        let strRev = ''

        for (let i = this.string.length - 1; i >= 0 ; i--) {
            strRev += this.string[i]
        }

        return strRev
    }

}

// 9 *


