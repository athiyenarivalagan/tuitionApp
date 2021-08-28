const { app, BrowserWindow } = require('electron')

// create a browser windows loading the html file.
function createWindow() {
    const win = new BrowserWindow({
        width: 800, //temp
        height: 600 //temp
    })

    win.loadFile('views/index.html')
}

// initialise sqlite
const sqlite3 = require('sqlite3').verbose();
// check if connection to database is possible and allow read/write access
const db = new sqlite3.Database('database/profiles.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to database.');
})
// create databse table
db.serialize(function() {
    db.run("CREATE TABLE if not exists users ( uname VARCHAR(255), pass VARCHAR(255), type VARCHAR(255), name VARCHAR(255), grade VARCHAR(255), subject VARCHAR(255), price VARCHAR(255), location VARCHAR(255));");
});


app.whenReady().then(() => {
    createWindow()
    // unix-specific
    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})