import path from 'path'
import { fileURLToPath } from 'url'

import {
  app,
  ipcMain,
  IpcMainEvent,
  IpcMainInvokeEvent,
  WebFrameMain,
} from 'electron'

import { pathToFileURL } from 'url'
import { AvaliableKeys } from './constants/enums.ts'
import serverConfig from './config/server.config.ts'

export function isDev(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function getPreloadPath() {
  console.log(app.getAppPath())
  return path.join(app.getAppPath(), '/dist-electron/preload.cjs')
}

export function getUiPath() {
  return path.join(app.getAppPath(), '/dist-react/index.html')
}

export function validateEvent(frame: WebFrameMain | null) {
  if (frame === null) throw new Error('Null event')

  if (
    isDev() &&
    new URL(frame.url).host ===
      `${serverConfig.dev.host}:${serverConfig.dev.port}`
  ) {
    return
  }

  if (frame.url !== pathToFileURL(getUiPath()).toString()) {
    throw new Error('Malicious event')
  }
}

export function onHandle<Key extends AvaliableKeys>(
  key: Key,
  handler: (event: IpcMainInvokeEvent, payload: any) => void
) {
  ipcMain.handle(key, async (event: IpcMainInvokeEvent, payload) => {
    validateEvent(event.senderFrame)
    const result = handler(event, payload)
    return result
  })
}

export function onReceive<Key extends AvaliableKeys>(
  key: Key,
  handle: (event: IpcMainEvent, payload: any) => any
) {
  ipcMain.on(key, (event: IpcMainEvent, payload) => {
    validateEvent(event.senderFrame)
    handle(event, payload)
  })
}

export function getDirname() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  return __dirname
}
