const electron = require('electron');
const path = require("path");
const url = require("url");

const { app, BrowserWindow, Menu } = electron;

let mainWindow = () => {
    let win = new BrowserWindow();
    win.loadFile('index.html')
    win.webContents.openDevTools()
}

app.on('ready', mainWindow)

// let changeWindow = () => {
//     let win = new BrowserWindow({
//         height: 150,
//         width: 400,
//         title: 'Change ID',
//     });
//     win.setMenuBarVisibility(false)
//     console.log(win.id)
//     win.loadFile('change.html');
// }

// let settingWindow = () => {
//     let win = new BrowserWindow({
//         height: 150,
//         width: 400,
//         title: 'Settings'
//     });
//     win.loadFile('settings.html');
// }

const toolbarTemplate = [
    {
        label: 'App',
        submenu: [
            {
                label: 'Change ID',
                click() {
                    changeWindow();
                }
            },
            {
                label: 'Settings',
                click() {
                    settingWindow();
                }
            },
            {
                role: 'reload'
            }
        ]
    },
]

const toolbar = Menu.buildFromTemplate(toolbarTemplate)
Menu.setApplicationMenu(toolbar)


