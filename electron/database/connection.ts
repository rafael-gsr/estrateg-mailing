import path from 'path'
import { Sequelize } from 'sequelize'
import { getDirname } from '../utils.ts'

export const connection = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(getDirname(), './estrateg-mailing.sqlite'),
})
