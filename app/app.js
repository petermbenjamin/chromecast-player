var player = require('chromecast-player')()
var ipcRenderer = require('electron').ipcRenderer

ipcRenderer.on('show', init)

function init () {
  player.attach(function (err, p) {
    var playButton = document.querySelector('.play')
    var playButtonIcon = document.querySelector('.play i.fa')
    var progressBar = document.querySelector('.progress')

    if (err) {
      console.error('An error ocurred while attaching the player: ' + err)
      progressBar.dataset.time = err
    }

    // Pause or play
    playButton.addEventListener('click', function () {
      p.getStatus(function (err, status) {
        if (err) console.error('An error ocurred while getting status of player: ' + err)
        if (status.playerState === 'PLAYING') {
          p.pause(function () {
            playButtonIcon.classList.remove('fa-pause')
            playButtonIcon.classList.add('fa-play')
          })
        } else {
          p.play(function () {
            playButtonIcon.classList.remove('fa-play')
            playButtonIcon.classList.add('fa-pause')
          })
        }
      })
    })

    // Update progress bar
    p.on('position', function () {
      progressBar.value = p.getProgress()
      progressBar.dataset.time = getTimeByMilliseconds(p.getPosition())
    })
  })
}

function getTimeByMilliseconds (milliseconds) {
  var date = new Date(milliseconds)

  return date.getMinutes() + ':' + date.getSeconds()
}
