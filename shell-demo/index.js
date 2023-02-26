const openBtn = document.getElementById('openBtn')
const shell = require('electron').shell

openBtn.addEventListener('click', (event) => {
    console.log('click');
    shell.showItemInFolder('C:\\dev\\ElectronTutorial\\shell-demo\\index.js')
    shell.openPath('C:\\dev\\ElectronTutorial\\shell-demo\\package.json')
    shell.openExternal('https://github.com')
    shell.beep()
})