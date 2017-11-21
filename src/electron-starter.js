const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path')
const url = require('url')

const { knex } = require("../db/connection");
const { createTable } = require("../db/create_schema");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let mainWindow;
let addWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
                              width: 800,
                              height: 600,
                              // frame: false,
                              webPreferences: {
                                nodeIntegration: false,
                                preload: __dirname + '/preload.js'
                              }

                            })

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000');

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // build the mainmenu
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  
  
  // insert the menu
  Menu.setApplicationMenu(mainMenu);

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.

    // app.quit()
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on("mainWindowLoaded", function ()  {
  console.log("pass!");
  rows = "hello";
  mainWindow.webContents.send("result", rows);


})
ipcMain.on('ping', () => {
  console.log("ping is here");
  mainWindow.webContents.send("pong");
//   insert test
//   knex("keychain").insert({
//       name: "udemy",
//       web: "www.udemy.com",
//       user: "John",
//       password: "test",
//       email: "JohnDoe@gmail.com",
//   }).then(() => {
//       console.log("record inserted")
//   }).catch((e) => {
//         console.log(e);
//   });
})

// Query for one record
ipcMain.on("name", (e, name) => {
    // console.log(name);
    knex('keychain').where('name', name)
        .then((item) => {
            console.log(item);
            mainWindow.webContents.send("filtered", item);
        
        })
})


// Routes controlled by react router
function createAddWindow() {

mainWindow.loadURL('http://localhost:3000/add');

}
// form separate window
function addForm() {

    form.loadURL("http://localhost:3000/form");
}

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add record',
                accelerator: process.platform == 'darwin' ? 'Command + Shift + A' : 'Ctrl + Shif + a',
                click() {
                    addForm();
                }
            },
            {
                label: 'Delete record',
                click() {
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Insert Window',
                click() {
                    createInsertWindow();
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command + Q' : 'Ctrl + Q',
                click() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'schemas',
        submenu: [
            {
            label: 'create table',
            click() {
                createTable("keychain");
                }
            },
            {
                label: 'select records',
                click() {
                    knex.select().table('keychain')
                      .then((data) => {
                          mainWindow.webContents.send("items", data);
                      })
                }
            }
        ]
    }
]