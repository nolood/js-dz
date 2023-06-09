'use strict'

// ??
function getPrice() {
    return `Этот товар стоит ${this.price}`
}

let intel = {
    name: 'Intel i7 3.5GHz',
    price: 100,
    discount: 10,
    count: 50,
    getPrice: getPrice,
    calcTotalPrice: function () {
        this.totalPrice = this.count * this.price;
        return this
    },
    getTotalPrice: function () {
        return this.totalPrice
    }
}

let amd = {
    name: 'Amd A8 3.5GHz',
    price: 75,
    discount: 10,
    count: 50,
    getPrice: getPrice
}


console.log(intel.getPrice(), amd.getPrice())

// ??

let name = 'Denis'

function getName(name) {
    let text = 'My name is '

    function getFullName(secondName) {
        return name + ' ' + secondName
    }

    return text + getFullName('Mescheryakov')
}

console.log(getName(name))

// 1

const rectangle = {
    width: 20,
    height: 40,
    getSquare: function () {
        return this.width * this.height
    }
}

console.log(rectangle.getSquare())

// 2

const nvidia = {
    name: 'Intel',
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getPriceWithDiscount: function () {
        return this.price - this.price * (parseInt(this.discount) / 100)
    }

}

console.log(nvidia.getPriceWithDiscount())

// 3

const user = {
    name: 'Egor',
    getUserName: function () {
        return this.name
    }
}

console.log(user.getUserName())

// 4

const rect = {
    height: 10,
    incrementHeight: function () {
        return this.height + 1
    }
}

console.log(rect.incrementHeight())

// 5 *

const numerator = {
    value: 1,
    double: function () {
        this.value = this.value * 2
        return this
    },
    plusOne: function () {
        this.value = this.value + 1
        return this
    },
    minusOne: function () {
        this.value = this.value - 1
        return this
    }
}

console.log(numerator.double().plusOne().plusOne().minusOne().value)

// 6

const product = {
    price: 10,
    count: 10,
    getTotalPrice: function () {
        return this.price * this.count
    }
}

const product2 = {
    price: 12,
    count: 20
}

product2.getTotalPrice = product.getTotalPrice

console.log(product2.getTotalPrice())


// 7

const sizes = {
    width: 5,
    height: 10
}

const getSquare = function () {
    return this.width * this.height
}

console.log(getSquare.call(sizes))

// 8

const numbers = [4, 12, 0, 10, -2, 4]

console.log(Math.min.apply(null, numbers))

// 9

const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function () {
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom)
    }
}

console.log(element.getFullHeight())

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
}

block.getFullHeight = element.getFullHeight

console.log(block.getFullHeight())

// 10

const element2 = {
    height: 25,
    getHeight: function () {
        return this.height
    }
}

const getElementHeight = element2.getHeight.bind(element2)
console.log(getElementHeight())
