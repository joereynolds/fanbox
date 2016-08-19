'use strict';


const electron = require('electron');
const config = require('./config');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

require('electron-reload')(__dirname);


//global reference to the window object. This is needed otherwise it
//gets garbage collected
var mainWindow = null;


function createWindow() {

    //width and height should be configurable by the user. Change this!
    mainWindow = new BrowserWindow({
        width: config.themes[config.theme].width,
        height: config.themes[config.theme].height,
        title: 'Fanbox',
        useContentSize: true,
        alwaysOnTop: true,
        frame: false,
        maximizable: false
    });


    mainWindow.loadURL('file://' + __dirname + '/layouts/' + config.theme);

    //make this configurable via the config.json file
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('window-all-closed', function() {
    //Macs handle things differently
    if (process.playform != 'darwin') {
        app.quit();
    }
});

app.on('ready', createWindow);
