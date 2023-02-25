console.log('main process working')

const electron = require("electron")
const app = electron.app
const BrowserWindon = electron.BrowserWindow
const path = require("path")

let win, dimWindows, colorWindow, framelessWindow
let parentWindow, childWindow

function createWindow() {
    // win = new BrowserWindon()

    // dimWindows = new BrowserWindon({
    //     width: 400,
    //     height: 400,
    //     maxHeight: 600,
    //     maxWidth: 600
    // })

    // colorWindow = new BrowserWindon({backgroundColor: '#228b22'})
    
    // framelessWindow = new BrowserWindon({
    //     backgroundColor: '#800000',
    //     frame: false
    // })

    // win.loadURL(path.join(__dirname, 'index.html'));

    // win.webContents.openDevTools()
    
    // win.on('closed', () => {
    //     win = null;
    // })
    parentWindow = new BrowserWindon({title: 'Parent'});
    childWindow = new BrowserWindon({show: false, parent: parentWindow, title: 'Child', modal: true})
    childWindow.loadURL('https://github.com')
    childWindow.once('ready-to-show', () => {
        childWindow.show()
    })
}

app.on('ready', createWindow)