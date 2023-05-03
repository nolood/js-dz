// 1

function getFirstDateOfYear(year) {
    const date = new Date(year, 0, 1)
    return date.toLocaleString('ru-RU', {
        weekday: 'long'
    })
}

console.log(getFirstDateOfYear(2016))

// 2

function getWeekday(date) {
    const newDate = new Date(date.split('.')[2], date.split('.')[1], date.split('.')[0])
    return newDate.toLocaleString('ru-RU', {weekday: 'long'})
}

console.log(getWeekday('29.03.1985'))

// 3


const startOfYear = new Date(new Date().getFullYear(), 0, 1);

const millisecondsSinceStartOfYear = new Date() - startOfYear;

const weeksSinceStartOfYear = Math.floor(millisecondsSinceStartOfYear / (1000 * 60 * 60 * 24 * 7));

console.log(weeksSinceStartOfYear);


