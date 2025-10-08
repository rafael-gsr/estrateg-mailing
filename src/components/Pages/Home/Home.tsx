import { useState } from 'react'

import Modal from '../../Molecules/Modal'

import BaseTemplate from '../../Templates/Base/Base'
import CreateEditContract from '../../Organisms/CreateEditContract'
import { ContractFields } from '../../Organisms/CreateEditContract/CreateEditContract.utils'
import { Contract } from '../../../../types'
import Title from '../../Atoms/Title'
import { Button } from '@mui/material'
import { Status } from '../../../constants/Status'

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleOnClose = () => {
    setIsVisible(false)
  }

  const onSubmit = (formValues: ContractFields) => {
    formValues.status = Status.REGULAR

    window.api
      .createContract(formValues as Contract)
      .then((response) => console.log(response))
  }

  return (
    <BaseTemplate>
      <Title
        level={1}
        colorScheme='light'
      >
        Cadastrar novo contrato
      </Title>

      <Button
        variant='contained'
        onClick={() => setIsVisible(true)}
      >
        Novo
      </Button>

      <Modal
        visible={isVisible}
        onClose={handleOnClose}
        title='Novo Contrato'
      >
        <CreateEditContract
          onCancel={() => setIsVisible(false)}
          onSubmit={onSubmit}
        />
      </Modal>
    </BaseTemplate>
  )
}

export default Home
