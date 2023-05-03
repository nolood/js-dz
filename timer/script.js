const buttons = document.querySelectorAll('[data-time]')
const form = document.querySelector('#custom')
const stopBtn = document.querySelector('.stop')

const timer = (function () {
    let countdown, timerDisplay, endTime, alarmSound;

    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector)
        endTime = document.querySelector(settings.timeEndSelector)

        if (settings.alarmSound) {
            alarmSound = new Audio(settings.alarmSound)
        }
    }

    function start(seconds) {
        if (!timerDisplay || !endTime) return console.log('Please init module first');
        if (!seconds || typeof seconds !== 'number') return console.log('Please provide seconds.');

        clearInterval(countdown)

        if (alarmSound) {
            alarmSound.pause()
            alarmSound.currentTime = 0
        }

        const now = Date.now()
        const then = now + seconds * 1000
        displayTimeLeft(seconds)
        displayEndTime(then)

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000)

            if (secondsLeft < 0) {
                clearInterval(countdown)
                playSound()
                return;
            }

            displayTimeLeft(secondsLeft)
        }, 1000)
    }

    function displayTimeLeft(seconds) {
        const days = Math.floor(seconds / 86400)
        const hours = Math.floor(seconds % 86400 / 3600)
        const minutes= Math.floor(seconds % 86400 % 3600 / 60)
        const reminderSeconds = seconds % 86400 % 3600 % 60

        const display = `${days > 0 ? days + ' дней' : ''} ${hours > 0 ? hours > 10 ? hours : '0' + hours + ':' : ''}${minutes > 10 ? minutes : '0' + minutes}:${reminderSeconds}`
        document.title = display
        timerDisplay.textContent = display
    }

    function displayEndTime(timeStamp) {
        const end = new Date(timeStamp)
        const hour = end.getHours()
        const minutes = end.getMinutes()

        endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`
    }

    function stop() {
        clearInterval(countdown)
        const display = `00:00`
        document.title = display
        timerDisplay.textContent = display
        endTime.textContent = `Be Back At 00:00`
    }

    function playSound() {
        alarmSound.play()
    }

    return {
        init, start, stop
    }


}());

timer.init({
    timeLeftSelector: '.display__time-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'sound.mp3'
})

// return this? ????
// timer.init({
//     timeLeftSelector: '.display__time-left',
//     timeEndSelector: '.display__end-time',
//     alarmSound: 'audio/bell.mp3'
// }).start(10000);

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer.start(seconds)
}

stopBtn.addEventListener('click', () => {
    timer.stop()
})

form.addEventListener('submit', e => {
    e.preventDefault()
    const minutes = document.getElementsByName('minutes')[0].value
    timer.start(minutes * 60)
})
buttons.forEach(btn => btn.addEventListener('click', startTimer))