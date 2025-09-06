import { FindOptions } from 'sequelize'
import { connection } from '../database/connection.ts'
import { Contract as ContractModel } from '../database/Contracts.model.ts'
import { Contract } from '../../types.ts'

class Contracts {
  private ContractModel

  constructor() {
    connection.sync().then()

    this.ContractModel = connection.define('Contracts', ContractModel)
  }

  getInstance() {
    if (this.ContractModel === undefined) {
      console.log(
        'The connection is undefined, please initalize the Contracts class before getting the instance'
      )

      return
    }

    return this.ContractModel
  }

  async get(findOptions?: FindOptions) {
    return await this.ContractModel.findAll(findOptions)
  }

  async create(contract: Contract) {
    const createResponse = await this.ContractModel.create(contract)

    return createResponse
  }

  async delete(id: string) {
    const deleteResponse = await this.ContractModel.destroy({
      where: {
        id: id,
      },
    })

    return deleteResponse
  }

  async update(contract: Partial<Contract>) {
    const findedObject = await this.ContractModel.findOne({
      where: {
        id: contract.id,
      },
    })

    if (findedObject !== null) {
      const contractKeys = Object.keys(contract)
      type TContractKeys = keyof typeof contract
      type TFindedObjectKeys = keyof typeof findedObject

      contractKeys.forEach((field) => {
        findedObject[field as TFindedObjectKeys] =
          contract[field as TContractKeys]
      })
    }

    findedObject?.save()

    return findedObject
  }
}

export const ContractService = new Contracts()
