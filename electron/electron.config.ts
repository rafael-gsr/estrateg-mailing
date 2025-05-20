import { app, BrowserWindow } from 'electron'
import { getPreloadPath, isDev, onHandle, onReceive } from './utils.ts'
import serverConfig from './constants/serverConfig.ts'

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      preload: getPreloadPath(),
      nodeIntegration: false,
    },
  })

  window.webContents.setWindowOpenHandler((event) => {
    if (isDev()) {
      if (event.url !== serverConfig.dev.url) {
        return { action: 'deny' }
      }
    }

    return { action: 'deny' }
  })

  if (isDev()) {
    window.loadURL(serverConfig.dev.url)
    return
  }

  window.loadFile('../dist-react/.html')
}

app.enableSandbox()

app.whenReady().then(() => {
  createWindow()

  onReceive('new-window', (event: any) => {
    event.preventDefault()
  })

  onReceive('logData', () => {
    console.log('loggedData')
  })

  onHandle('logInvoke', () => 'invoke test' )
})
