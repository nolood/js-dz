let tasks = JSON.parse(localStorage.getItem('tasks')) || []

let ul = document.querySelector('.list-group')
let form = document.forms['addTodoItem']
let inputText = form.elements['todoText']
let clearBtn = document.querySelector('.clear-btn')
let notificationAlert = document.querySelector('.notification-alert')
let emptyListAlert = document.querySelector('.empty-list')


const generateId = () => {
    let id = ''
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

    for (let i = 0; i < 15; i++) {
        let position = Math.floor(Math.random() * words.length)
        id += words[position]
    }
    return id
}

function checkEmptyList() {
    if (tasks.length === 0) {
        emptyListAlert.classList.add('show')
    } else {
        emptyListAlert.classList.remove('show')
    }
}

const generateList = (tasks) => {
    clearList()
    for (let i = 0; i < tasks.length; i++) {
        ul.appendChild(listTemplate(tasks[i]))
    }
    checkEmptyList()
}

const listTemplate = (task) => {

    let li = document.createElement('li')
    li.className = 'list-group-item d-flex justify-content-between align-items-center'
    li.setAttribute('data-id', task.id)

    let span = document.createElement('span')
    span.textContent = task.text

    let btnDel = document.createElement('button')
    btnDel.className = 'btn-close delete-item ms-4'

    let btnEdit = document.createElement('button')
    btnEdit.className = 'btn btn-danger ms-auto edit-item'
    btnEdit.textContent = 'Edit'

    li.appendChild(span)
    li.appendChild(btnEdit)
    li.appendChild(btnDel)


    return li
}

const clearList = () => {
    ul.innerHTML = '';
}

const addTask = (task) => {
    tasks.push({
        id: generateId(),
        text: task
    })
    generateList(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteListItem (id) {

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1)
            break
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
    checkEmptyList()

    message({
        text: 'Task deleted success',
        cssClass: 'alert-warning',
        timeout: 4000
    })
}

function editListItem(id, newValue) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].text = newValue
            break
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))

    message({
        text: 'Task updated success',
        cssClass: 'alert-success',
        timeout: 4000
    })
}

function message(settings) {
    notificationAlert.classList.add(settings.cssClass)
    notificationAlert.textContent = settings.text
    notificationAlert.classList.add('show')
    setTimeout(() => {
        notificationAlert.classList.remove('show')
    }, settings.timeout)
}

ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete-item')) {
        let parent = e.target.closest('li')
        let id = parent.dataset.id

        deleteListItem(id)
        parent.remove()
    } else if (e.target.classList.contains('edit-item')) {

        let span = e.target.closest('li').querySelector('span')
        let id = e.target.closest('li').dataset.id;

        if (e.target.textContent === 'Edit') {
            span.setAttribute('contenteditable', true)
            span.focus()
            e.target.textContent = 'Save'
        } else {
            span.setAttribute('contenteditable', false)
            span.blur()
            editListItem(id, span.textContent)
            e.target.textContent = 'Edit'
        }
    }
})

form.addEventListener('submit', e => {
    e.preventDefault()
    if (inputText.value) {
        addTask(inputText.value)
        form.reset()
    }
})

clearBtn.addEventListener('click', () => {
    clearList()
    tasks = []
    localStorage.setItem('tasks', [])
    checkEmptyList()
})


generateList(tasks)





































