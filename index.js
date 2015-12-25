var menubar = require('menubar');

var mb = menubar({
  dir: __dirname + '/app',
  width: 400,
  height: 175,
  icon: __dirname + '/app/Icon-Template.png',
  preloadWindow: true,
  'window-position': 'topRight'
});
