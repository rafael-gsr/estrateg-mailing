import { FindOptions, Op } from 'sequelize'
import { ContractService } from '../services/Contracts.service.ts'
import { Contract } from '../../types'

async function get(findOptions?: FindOptions) {
  return await ContractService.get(findOptions)
}

async function getOverduedContracts() {
  const response = await ContractService.get({
    where: {
      dueDate: { [Op.lt]: new Date().getTime() },
    },
  })

  return response
}

async function getOverdueThisWeek() {
  const today = new Date()
  const todayDate = today.getDate()
  const minimal = today.setDate(todayDate - 4)
  const maximal = today.setDate(todayDate + 4)

  const response = await ContractService.get({
    where: {
      dueDate: {
        [Op.lte]: maximal,
        [Op.gte]: minimal,
      },
    },
  })

  return response
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
  getOverduedContracts,
  getOverdueThisWeek,
}
