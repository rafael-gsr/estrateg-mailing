import path from 'path'
import { app, ipcMain, IpcMainEvent, IpcMainInvokeEvent, WebFrameMain } from "electron"
import { pathToFileURL } from 'url'
import { AvaliableKeys } from './constants/enums.ts'
import serverConfig from './constants/serverConfig.ts'

export function isDev(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function getPreloadPath() {
  const relativePath = isDev() ? '.' : '..'
  return path.join(
    app.getAppPath(),
    relativePath,
    '/dist-electron/preload.cjs'
  )
}

export function getUiPath() {
  return path.join(app.getAppPath(), '/dist-react/index.html')
}

export function validateEvent(frame: WebFrameMain | null) {
  if (frame === null) throw new Error('Null event')
  if (isDev() && new URL(frame.url).host === `${serverConfig.dev.host}:${serverConfig.dev.port}`) {
    return
  }
  if (frame.url !== pathToFileURL(getUiPath()).toString()) {
    throw new Error('Malicious event')
  }
}

export function onHandle<Key extends AvaliableKeys>(
  key: Key,
  handler: any,
) {
  ipcMain.handle(key, async (event: IpcMainInvokeEvent, payload) => {
    validateEvent(event.senderFrame)
    const result = handler(payload)
    return result
  })
}

export function onReceive<Key extends AvaliableKeys>(
  key: Key,
  handle: any, 
) {
  ipcMain.on(key, (event: IpcMainEvent, payload) => {
    validateEvent(event.senderFrame)
    handle(payload)
  })
}
