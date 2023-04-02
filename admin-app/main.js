const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const isMac = process.platform === 'darwin';


function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Admin Dashboard',
        width: 1200,
        height: 900,
        webPreferences: {
            contextIsolation:true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });


    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    // const mainMenu = Menu.buildFromTemplate(menu);
    // Menu.setApplicationMenu(mainMenu);

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    });
});

// const menu = [
//     {
//         role: 'fileMenu',
//     },
// ]

app.on('window-all-closed', () => {
    if(!isMac){
        app.quit();
    }
})