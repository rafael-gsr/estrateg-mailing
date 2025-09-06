import { connection } from './connection.ts'
import { Contract } from './Contracts.model.ts'

export const database = connection.define('Contract', Contract)
