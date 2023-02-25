console.log('main process working')
console.log('from main.js');

const electron = require("electron")
const app = electron.app
const BrowserWindon = electron.BrowserWindow
const path = require("path")

// In the main process:
require('@electron/remote/main').initialize()

let winOne, winTwo

function createWindow() {
    winOne = new BrowserWindon({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
  
    winOne.loadURL(path.join(__dirname, 'one.html'));

    winOne.webContents.openDevTools()
    
    winOne.on('closed', () => {
        winOne = null;
    })

    // for enable access remote from render process
    require('@electron/remote/main').enable(winOne.webContents)

    winTwo = new BrowserWindon({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    
    winTwo.loadURL(path.join(__dirname, 'two.html'));

    winTwo.webContents.openDevTools()
    
    winTwo.on('closed', () => {
        winTwo = null;
    })
}

app.on('ready', createWindow)