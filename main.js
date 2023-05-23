const cors = require('cors');
const express = require('express');
const porta = 6341;

const {app, BrowserWindow, Menu, MenuItem} = require('electron');
app.disableHardwareAcceleration();
app.commandLine.appendSwitch('no-sandbox');
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('disable-gpu-compositing');
app.commandLine.appendSwitch('disable-gpu-rasterization');
app.commandLine.appendSwitch('disable-gpu-sandbox');
app.commandLine.appendSwitch('--no-sandbox');
app.commandLine.appendSwitch("disable-http-cache");

class TestController {
  isAlive = async(req, res) => {
    console.log("Está vivo!");
    res.send("Está vivo!");
  }
}

class HomeController {
  abrirPrograma = async (req, res) => {
    var caminho = req.query;
    var caminhoString = JSON.stringify(caminho).replace('{"caminho":"', '').replace('"}', '');
    var childProcess = require('child_process');

    let caminhoExecucao= caminhoString;

    if(!caminhoString.includes('.')){
      caminhoExecucao = "explorer " + caminhoString.replace("\\\\", "\\")
    }

    await childProcess.exec(caminhoExecucao, (err, stdout, stderr) => {
      if( stderr ){
        res.status(400).send(stderr)
      } else {
        res.send('Aberto o programa de caminho ' + caminhoExecucao);
      }
    })
  }
}

class MyServ {
  constructor(port) {
    this.port = port;
    this.serv = express();
    this.middlewares();
    this.routes();
    this.listen();
  }

  listen() {
    this.serv.listen(this.port, () => {
      console.log(":::::::::::::::::::");
      console.log(`Escutando na porta ${this.port}`);
      console.log(`CTRL + Clique em http://localhost:${this.port}`);
    })
  }

  middlewares() {
    this.serv.use(express.urlencoded({extended: true}));
    this.serv.use(express.json());
  }

  routes() {
    let homeController = new HomeController();
    let testController = new TestController();

    const homeRoutes = new express.Router();
    homeRoutes.get('/', homeController.abrirPrograma);

    const testRoutes = new express.Router();
    testRoutes.get('/', testController.isAlive);

    this.serv.use(cors());
    this.serv.use('/comando/', homeRoutes);
    this.serv.use('/isAlive/', testRoutes);
  }
}

function ExecutarServidor() {
  fetch("http://localhost:6341/isAlive")
  .then((response) => {console.log("then")})
  .catch(function (err) {
    console.log("catch")
    let myserv = new MyServ(porta);
  });
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
  win.loadURL('Pagina');
}

app.whenReady().then(createWindow).finally(ExecutarServidor);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// electron-packager . IntranetWebNode --platform=win32 --arch=x64 --out=C:\Users\rafael.albuquerque\Desktop\ProjetosTeste\intranet-web-node\IntranetElectronCodInic\out --icon=C:\Users\rafael.albuquerque\Desktop\ProjetosTeste\intranet-web-node\IntranetElectronCodInic\icone.ico --overwrite
