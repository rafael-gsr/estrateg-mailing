const { ipcRenderer } = require("electron")
const { contextBridge } = require('electron')

function ipcSend<Key>(
  key: Key ,
  data: string
) {
  ipcRenderer.send(key, data)
}

function ipcInvoke<Key>(
  key: Key,
){
  return ipcRenderer.invoke(key)
}

contextBridge.exposeInMainWorld('electronMethods', {
  logData: () => ipcSend('logData','logData log'),
  logInvoke: () => ipcInvoke('logInvoke')
}) 