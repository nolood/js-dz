
// 1

let list = document.querySelector('.list')

for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li')
    li.className = 'new-item'
    li.textContent = 'item' + i

    list.appendChild(li)
}

// 2

let a = document.querySelectorAll('.list-link')

let strong1 = document.createElement('strong')
strong1.textContent = 'strong1'

a[0].appendChild(strong1)

let strong2 = document.createElement('strong')
strong2.textContent = 'strong2'

a[1].appendChild(strong2)

let strong3 = document.createElement('strong')
strong3.textContent = 'strong3'

a[2].appendChild(strong3)

// 3

let body = document.querySelector('body')
let img = document.createElement('img')

img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%8C_%D0%B8_%D0%A8%D1%83%D1%82_%D0%BD%D0%B0_%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%82_2011.jpg')
img.setAttribute('alt', 'Горшок')

body.prepend(img)

// 4

let mark = document.querySelector('.mark')
mark.textContent += ' green'
mark.className = 'green'

// 5 *

let listItems = document.querySelectorAll('.new-item')
list.innerHTML = ''

let sortedList = Object.values(listItems).sort().reverse()

for (let i = 0; i < sortedList.length; i++) {
    list.appendChild(sortedList[i])
    console.log(sortedList[i])
}

// 6 ???








