import { DataTypes, ModelAttributes, UUIDV4 } from 'sequelize'

export const Contract: ModelAttributes = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: UUIDV4,
  },

  companyName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  activity: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      is: /^[^.\s][\w\-.{2,}]+@([\w-]+\.)+[\w-]{2,}$/gm,
    },
  },

  phone: {
    type: DataTypes.TEXT,
    validate: {
      is: /(\(?\d{2}\)?)\s?(\d{5})-?(\d{4})/gi,
    },
  },

  dueDate: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z/gi,
    },
  },

  observations: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastContact: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}

export const Clients = {}
