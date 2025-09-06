import { z } from 'zod'
import { Contract } from '../../../../types'

type defaultErrorMessages = Partial<Record<keyof Contract, string>>

const defaultErrorMessages: defaultErrorMessages = {
  companyName: 'Informe o nome da empresa',
  activity: 'Informe o tipo de atividade da empresa',
  email: 'Informe o email associado a esse contrato',
  phone: 'Informe o telefone de contato',
  dueDate: 'Informe a data de vencimento do contrato',
}

export const ContractSchema = z.object({
  id: z.string().optional(),
  companyName: z
    .string({ message: defaultErrorMessages.companyName })
    .min(1, { message: defaultErrorMessages.companyName })
    .min(3, 'O nome deve ter ao menos 3 letras'),
  activity: z
    .string({ message: defaultErrorMessages.activity })
    .min(1, defaultErrorMessages.activity)
    .min(3, 'A atividade deve ter pelo menos 3 letras'),
  email: z
    .string({ message: defaultErrorMessages.email })
    .min(1, defaultErrorMessages.email)
    .email({ message: 'O email deve seguir o padrão: email@exemplo.com' }),
  phone: z
    .string({ message: defaultErrorMessages.phone })
    .min(1, defaultErrorMessages.phone)
    .regex(
      /^(([(])(0)?([1-9]{2})([)])|(0)?([1-9]{2}))(\s)?(9)?(\s)?(\d{4})([\s|-])?(\d{4})$/,
      {
        message: 'Insira um número de telefone válido',
      }
    ),
  dueDate: z
    .number({ message: defaultErrorMessages.dueDate })
    .min(1, defaultErrorMessages.dueDate),
  observations: z.string().optional(),
  status: z.string().optional(),
  lastContact: z.string().optional(),
})

export type ContractFields = z.infer<typeof ContractSchema>
