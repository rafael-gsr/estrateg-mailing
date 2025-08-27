import { FindOptions } from 'sequelize'
import { ContractService } from '../services/Contracts.service.ts'
import { Contract } from '../../types'

async function get(findOptions?: FindOptions) {
  if (findOptions) return await ContractService.get(findOptions)
  return await ContractService.getAll()
}

async function create(contract: Contract) {
  return await ContractService.create({
    ...contract,
    status: '',
    lastContact: new Date().toISOString(),
  })
}

async function update(contract: Partial<Contract>) {
  return await ContractService.update(contract)
}

async function remove(id: string) {
  return await ContractService.delete(id)
}

async function updateDatabase() {}

export const ContractController = {
  updateDatabase,
  get,
  create,
  update,
  remove,
}
