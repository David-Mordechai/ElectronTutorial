console.log('main process working')

const electron = require("electron")
const app = electron.app
const BrowserWindon = electron.BrowserWindow
const path = require("path")

let win

function createWindow() {
    win = new BrowserWindon({
        width: 500,
        height: 150,
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    
    win.loadURL(path.join(__dirname, 'index.html'));

    // win.webContents.openDevTools()

    win.once('ready-to-show', () => {
        win.show();
    })
    
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow)