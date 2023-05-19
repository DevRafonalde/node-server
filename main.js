const {app, BrowserWindow, Menu, MenuItem} = require('electron')
app.disableHardwareAcceleration();
app.commandLine.appendSwitch( 'no-sandbox' );
app.commandLine.appendSwitch( 'disable-gpu' );
app.commandLine.appendSwitch( 'disable-software-rasterizer' );
app.commandLine.appendSwitch( 'disable-gpu-compositing' );
app.commandLine.appendSwitch( 'disable-gpu-rasterization' );
app.commandLine.appendSwitch( 'disable-gpu-sandbox' );
app.commandLine.appendSwitch( '--no-sandbox' );
app.commandLine.appendSwitch ("disable-http-cache");

function ExecutarServidor(){

  const express = require('express')
  const app = express()
  const port = 6341

  app.get('/', (req, res) => {

    var childProcess = require('child_process');
    childProcess.exec('start CAMINHO', function (err, stdout, stderr) {
            if (err) {
              console.error(err);
            return;
        }
        console.log(stdout);
    })




    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

}

function createWindow() {
  const win = new BrowserWindow({show: false});
  win.maximize();
  win.webContents.session.clearStorageData();
  win.webContents.clearHistory();
  win.show();

const menu = new Menu()
menu.append(new MenuItem({
  label: 'Recarregar',
    accelerator: "F5",
    click: () => {
      win.webContents.reloadIgnoringCache();
    }
}));

Menu.setApplicationMenu(menu);

  win.loadURL('PAGINAQUALQUER')
}

app.whenReady().then(createWindow).finally(ExecutarServidor);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// electron-packager . IntranetWebNode --platform=win32 --arch=x64 --out=C:\Users\rafael.albuquerque\Desktop\ProjetosTeste\intranet-web-node\IntranetElectronCodInic\out --icon=C:\Users\rafael.albuquerque\Desktop\ProjetosTeste\intranet-web-node\IntranetElectronCodInic\icone.ico --overwrite