console.log('main process working')

const electron = require("electron")
const app = electron.app
const BrowserWindon = electron.BrowserWindow
const path = require("path")

const ipc = electron.ipcMain

ipc.on('async-message', (event) => {
    event.sender.send('async-replay', 'async replay')
})

ipc.on('sync-message', (event) => {
    event.returnValue = 'sync-replay'
})

let win

function createWindow() {
    win = new BrowserWindon({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.loadURL(path.join(__dirname, 'index.html'));

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow)