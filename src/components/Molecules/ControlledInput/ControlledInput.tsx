import { TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { ContractFields } from '../../Organisms/CreateEditContract/CreateEditContract.utils'
import { ChangeEvent } from 'react'

const ControlledInput = ({
  control,
  name,
  label,
  formatter,
}: {
  control: Control<ContractFields>
  label: string
  name: keyof ContractFields
  formatter?: (elementToFormat: string | undefined) => string
}) => {
  const handleChangeFunction = (
    field: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (formatter) {
      return {
        ...field,
        target: {
          ...field.target,
          value: formatter(field.target.value),
        },
      }
    }
    return field
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onBlur, onChange, value, disabled },
        formState: { errors },
      }) => (
        <TextField
          name={name}
          id={name}
          onBlur={onBlur}
          onChange={(newValue) => onChange(handleChangeFunction(newValue))}
          error={!!errors[name]?.message}
          helperText={errors[name]?.message}
          value={value}
          label={label}
          variant='outlined'
          disabled={disabled}
          color='primary'
        />
      )}
    />
  )
}

export default ControlledInput
