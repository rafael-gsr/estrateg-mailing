import { FindOptions } from 'sequelize'
import { AvaliableKeys } from './constants/enums'
import { Contract } from '../types'

const { ipcRenderer, contextBridge } = require('electron')

function ipcSend(key: AvaliableKeys, data?: any) {
  ipcRenderer.send(key, data)
}

function ipcInvoke(key: AvaliableKeys, data?: any) {
  return ipcRenderer.invoke(key, data)
}

const MAIN_API = {
  logData: () => ipcSend('logData', 'logData log'),
  logInvoke: (payload: any) => ipcInvoke('logInvoke', payload),

  createContract: (contract: Contract) => ipcInvoke('createContract', contract),
  updateContract: (newContract: Partial<Contract>) =>
    ipcInvoke('updateContract', newContract),
  getContracts: (options?: FindOptions) => ipcInvoke('getContracts', options),
  deleteContract: (id: string) => ipcInvoke('deleteContract', id),
  getOverduedContracts: () => ipcInvoke('getOverduedContracts'),
  getOverdueThisWeek: () => ipcInvoke('getOverdueThisWeek'),
}

contextBridge.exposeInMainWorld('api', MAIN_API)
