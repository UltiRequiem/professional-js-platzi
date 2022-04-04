// Electron Config

const { app, BrowserWindow } = require("electron");

const createWindow = () =>
  new BrowserWindow({
    width: 800,
    height: 600,
  });

const run = (window) => window.loadFile("./src/index.html");

app.on("ready", () => run(createWindow()));
