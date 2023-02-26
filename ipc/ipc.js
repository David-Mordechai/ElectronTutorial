const electron = require("electron")
const ipc = electron.ipcRenderer

const asyncBtn = document.getElementById('asyncBtn')
const syncBtn = document.getElementById('syncBtn')

asyncBtn.addEventListener('click', () => {
    console.log('async message 1')
    ipc.send('async-message')
    console.log('async message 2')
})

ipc.on('async-replay', (_, args) =>{
    console.log(args);
})

syncBtn.addEventListener('click', () => {
    console.log('sync message 1')
    const replay = ipc.sendSync('sync-message')
    console.log(replay);
    console.log('sync message 2')
})