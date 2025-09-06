import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContractFields, ContractSchema } from './CreateEditContract.utils'
import { Button } from '@mui/material'
import { Contract } from '../../../../types'
import ControlledInput from '../../Molecules/ControlledInput'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import './CreateEditContract.styles.scss'
import { formatPhoneNumber } from '../../../utils/formatPhoneNumber'
import dayjs from 'dayjs'

const CreateEditModal = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: SubmitHandler<ContractFields>
  defaultValues?: Partial<Contract>
}) => {
  const { control, handleSubmit } = useForm<ContractFields>({
    resolver: zodResolver(ContractSchema),
    defaultValues: defaultValues ?? undefined,
  })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='create_edit_form'
    >
      <ControlledInput
        control={control}
        name='companyName'
        label='Nome da Empresa'
      />

      <ControlledInput
        control={control}
        name='activity'
        label='Atividade'
      />

      <ControlledInput
        control={control}
        name='email'
        label='Email'
      />

      <ControlledInput
        control={control}
        name='phone'
        label='Telefone'
        formatter={formatPhoneNumber}
      />

      <Controller
        control={control}
        name='dueDate'
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <DatePicker
            format='DD/MM/YYYY'
            value={dayjs(value ?? null)}
            onChange={(value) => onChange(value?.valueOf())}
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message,
              },
            }}
          />
        )}
      />

      <ControlledInput
        control={control}
        name='observations'
        label='Observações'
      />

      <div className='create_edit_form__buttons'>
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: '50%' }}
          type='submit'
        >
          Salvar
        </Button>

        <Button
          variant='contained'
          color='primary'
          sx={{ width: '50%' }}
        >
          Cancelar
        </Button>
        <input type='submit' />
      </div>
    </form>
  )
}

export default CreateEditModal
