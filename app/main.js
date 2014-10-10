app           = require("app")
BrowserWindow = require("browser-window")

//------------------------------------------------------------------------------
require("crash-reporter").start()

mainWindow = null

app.on("window-all-closed", onWindowAllClosed)
app.on("ready", onReady)

require("Dillinger/app.js") // start dillinger

//------------------------------------------------------------------------------
function onWindowAllClosed() {
  if (process.platform != "darwin")
    app.quit()
}

//------------------------------------------------------------------------------
function onReady() {
  mainWindow = new BrowserWindow({width: 800, height: 600})


  mainWindow.loadUrl("http://localhost:8080/")

  mainWindow.on("closed", function() {
    mainWindow = null
  })
}
