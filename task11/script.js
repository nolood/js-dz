
class Car {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        let firstLetter = this.name[0]
        return firstLetter.toUpperCase() + this.name.slice(1)
    }

    getDate() {
        let currentDate = new Date()
        return currentDate.getFullYear() - this.age
    }
}

const lexus = new Car('Lexus', 2)

console.log(lexus.getDate())
console.log(lexus.getName())


class StringEncryptor {
    constructor(string) {
        let originalString = string;
        let encryptedString = string.split("").reverse().join("");

        this.getOriginal = function() {
            return originalString ? originalString : '';
        }

        this.getEncrypted = function() {
            return encryptedString ? encryptedString : '';
        }

        this.eraseAll = function() {
            originalString = null;
            encryptedString = null;
        }
    }
}

let encryptor = new StringEncryptor('Hello world!')

console.log(encryptor.getOriginal())
console.log(encryptor.getEncrypted())
encryptor.eraseAll()
console.log(encryptor.getOriginal())
console.log(encryptor.getEncrypted())


class StringClass {
    constructor(string) {
        this.string = string

        this.length = function () {
            return this.string.length
        }

        this.toString = function () {
            return this.string
        }

        this.valueOf = function () {
            return this.string.length
        }
    }

    get() {
        return this.string
    }

    set(str) {
        this.string = str
    }


}

const str = new StringClass('test')

console.log(str.toString())
console.log(+str)


