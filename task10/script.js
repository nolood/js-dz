// 1

const str = 'test';
let newStr = ''
let i = 0;

const timer = setInterval(() => {
    newStr += str[i]
    console.log(newStr)
    i++;
    if (i === str.length) {
        clearInterval(timer);
    }
}, 200);

// 2

const timeoutLog = (str, time) => {
    setTimeout(() => {
        console.log(str)
    }, time)
}

timeoutLog('test', 2000)


