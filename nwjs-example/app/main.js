var gui = require('nw.gui');
var os = require('os');

console.log('You are running on ', os.platform());

// Get the current window
var win = gui.Window.get();
win.showDevTools();

// We can not create a clipboard, we have to receive the system clipboard
var clipboard = gui.Clipboard.get();

// Read from clipboard
var text = clipboard.get('text');
console.log(text);

// Or write something
clipboard.set('I love node-webkit :)', 'text');

// And clear it!
clipboard.clear();
