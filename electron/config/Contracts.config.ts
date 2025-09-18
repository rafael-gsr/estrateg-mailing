import { IpcMainInvokeEvent } from 'electron'
import { onHandle } from '../utils.ts'
import { FindOptions } from 'sequelize'
import { ContractController } from '../controllers/Contracts.controller.ts'
import { Contract } from '../../types'

export const defineContractsHandler = () => {
  onHandle(
    'createContract',
    async (event: IpcMainInvokeEvent, contract: Contract) => {
      console.log('create event: ', event)
      const responsePromise = await ContractController.create(contract)
      return responsePromise
    }
  )

  onHandle(
    'getContracts',
    async (event: IpcMainInvokeEvent, options?: FindOptions) => {
      console.log('get event: ', event)
      const responsePromise = await ContractController.get(options)
      return responsePromise
    }
  )

  onHandle('getOverduedContracts', async () => {
    const response = await ContractController.getOverduedContracts()
    return response
  })

  onHandle('getOverdueThisWeek', async () => {
    const response = await ContractController.getOverdueThisWeek()
    return response
  })

  onHandle(
    'updateContract',
    async (event: IpcMainInvokeEvent, contract: Partial<Contract>) => {
      console.log('update event: ', event)
      const responsePromise = await ContractController.update(contract)
      return responsePromise
    }
  )

  onHandle('deleteContract', async (event: IpcMainInvokeEvent, id: string) => {
    console.log('delete event: ', event)
    const responsePromise = await ContractController.remove(id)
    return responsePromise
  })

  onHandle('updateDatabase', async (event: IpcMainInvokeEvent) => {
    console.log('update database', event)
    return 'ok'
  })
}
