import { app } from 'electron'
import { ContractHandlerConfig } from './config/Contracts.config.ts'
import { defineEventHandlers } from './config/Events.config.ts'
import { createWindow } from './config/Window.config.ts'
import { connection } from './database/connection.ts'

app.enableSandbox()

app.whenReady().then(() => {
  createWindow()
  defineEventHandlers()
  const contractHandler = new ContractHandlerConfig()
  contractHandler.defineContractsHandler()

  connection.sync().then((syncResponse) => console.log(syncResponse))
})
