
const ajax = (function () {
    function send(settings) {
        const xhr = new XMLHttpRequest()

        xhr.addEventListener('error', ev => {
            settings.error({
                errorText: xhr.responseText,
                code: xhr.status
            })
        })

        xhr.addEventListener('load', ev => {
            settings.success(xhr.responseText)
        })

        xhr.addEventListener('timeout', ev => {

        })

        xhr.open(settings.method, settings.url)
        xhr.timeout = settings.timeout
        xhr.send(settings.data)
    }

    return {
        send: send
    }
})();