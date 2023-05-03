class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player')
        this.video = this.player.querySelector('.viewer')
        this.progress = document.querySelector('.progress')
        this.progressBar = this.progress.querySelector('.progress__filled')
        this.toggle = this.player.querySelector('.toggle')
        this.skipButtons = this.player.querySelectorAll('[data-skip]')
        this.ranges = this.player.querySelectorAll('.player__slider')
    }

    init() {
        this.events()
        this.video.currentTime = JSON.parse(localStorage.getItem('video-player-settings')).currentTime || 0
        this.video.volume = parseFloat(JSON.parse(localStorage.getItem('video-player-settings')).volume) || 1
        this.video.playbackRate = parseFloat(JSON.parse(localStorage.getItem('video-player-settings')).playbackRate) || 1
        this.ranges[0].value = parseFloat(JSON.parse(localStorage.getItem('video-player-settings')).volume) || 1
        this.ranges[1].value = parseFloat(JSON.parse(localStorage.getItem('video-player-settings')).playbackRate) || 1
    }

    events() {
        this.video.addEventListener('click', (e) => this.togglePlay())
        this.toggle.addEventListener('click', (e) => this.togglePlay())
        this.ranges.forEach(range => addEventListener('change', e => this.handleRangeUpdate(e)))
        this.ranges.forEach(range => addEventListener('mousemove', e => this.handleRangeUpdate(e)))
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)))
        this.progress.addEventListener('click', e => {
            let rect = this.progress.getBoundingClientRect()
            let x = ((e.clientX - rect.left) / rect.width) * 100
            this.scrollVideo(x.toFixed(2) + '%')
        })
        this.progress.addEventListener('mousedown', e => {
            let rect = this.progress.getBoundingClientRect()
            let x = ((e.clientX - rect.left) / rect.width) * 100
            this.scrollVideo(x.toFixed(2) + '%')
            this.fillProgress()
        })

        this.video.addEventListener('timeupdate', () => this.fillProgress())
    }

    togglePlay() {
        const method = this.video.paused ? 'play' : 'pause'
        this.toggle.textContent = this.video.paused ? '⏸️' : '▶'
        this.video[method]()
    }

    handleRangeUpdate(e) {
        this.video[e.target.name] = e.target.value
        this[e.target.name] = e.target.value
        this.saveSettings()
    }

    skip(e) {
        this.video.currentTime += parseFloat(e.target.dataset.skip)
        this.saveSettings()
    }

    fillProgress() {
        this.progressBar.style.width = (this.video.currentTime / this.video.duration * 100).toFixed(2) + '%'
        this.saveSettings()
    }

    scrollVideo(x) {
        console.log(x)
        this.progressBar.style.width = x
        this.video.currentTime = parseFloat(x) / 100 * this.video.duration
        this.saveSettings()
    }

    saveSettings() {
        localStorage.setItem('video-player-settings', JSON.stringify({
            currentTime: this.video.currentTime,
            volume: this.ranges[0].value,
            speed: this.ranges[1].value
        }))
    }
}

const video = new VideoPlayer()
video.init()
