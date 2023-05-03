// 1
function promiseCreator(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}

promiseCreator(1000, 'OK').then(console.log)