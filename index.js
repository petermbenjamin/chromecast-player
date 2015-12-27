var menubar = require('menubar')

menubar({
  dir: __dirname + '/app',
  width: 300,
  height: 50,
  icon: __dirname + '/app/Icon-Template.png',
  preloadWindow: true,
  'window-position': 'topCenter'
})
