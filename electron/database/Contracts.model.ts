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
      is: /^(([(])(0)?([1-9]{2})([)])|(0)?([1-9]{2}))(\s)?(9)?(\s)?(\d{4})([\s|-])?(\d{4})$/,
    },
  },

  dueDate: {
    type: DataTypes.NUMBER,
    allowNull: false,
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

export const Clients: ModelAttributes = {}
