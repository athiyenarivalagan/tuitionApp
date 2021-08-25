const { app, BrowserWindow } = require('electron')

// create a browser windows loading the html file.
function createWindow() {
    const win = new BrowserWindow({
        width: 800, //temp
        height: 600 //temp
    })

    win.loadFile('views/transition.html')
}

app.whenReady().then(() => {
    createWindow()
    // unix-specific
    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})