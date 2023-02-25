console.log('From one.js');

const BrowserWindow = require("@electron/remote").BrowserWindow;

const path = require('path')

const newWindowBtn = document.getElementById('newWindowBtn')
newWindowBtn.addEventListener('click', function (event){
    
    let winThree = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    
    winThree.loadURL(path.join(__dirname, 'three.html'));
    
    winThree.webContents.openDevTools()
    
    winThree.on('closed', () => {
        console.log('window three closed');
        winThree = null;
    })
})