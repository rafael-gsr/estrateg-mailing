import { useEffect, useState } from 'react'

import Modal from '../../Molecules/Modal'

// import Button from '../../Atoms/Button'
// import Text from '../../Atoms/Text'
// import Title from '../../Atoms/Title'
import BaseTemplate from '../../Templates/BaseTemplate/BaseTemplate'
// import Input from '../../Atoms/Input/Input'
import CreateEditContract from '../../Organisms/CreateEditContract'
import { ContractFields } from '../../Organisms/CreateEditContract/CreateEditContract.utils'
import { Contract } from '../../../../types'

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  // const [inputValue, setInputValue] = useState<string>()

  const handleOnClose = () => {
    setIsVisible(false)
  }

  // const handleOpenModal = () => {
  //   setIsVisible(true)
  // }

  const onSubmit = (formValues: ContractFields) => {
    console.log(formValues)

    window.api.createContract(formValues as Contract)
    console.log(window.api.getContracts())
  }

  useEffect(() => {
    console.log('execute contract')
    // window.api.createContract({
    //   companyName: 'meu primeiro teste',
    //   activity: 'teste activity',
    //   email: 'teste@email.com',
    //   phone: '(31) 98662-8806',
    //   dueDate: '2025-07-01T04:21:57.070Z',
    // })
  }, [])

  return (
    <BaseTemplate>
      {/* <Title colorScheme="light" level={1}>
        Home
      </Title>

      <Text type="routerLink" colorScheme="light" href="clients">
        clients
      </Text>

      <Text type="p" colorScheme="light">
        teste
      </Text>

      <Text type="routerLink" colorScheme="dark" href="dashboards">
        dashboards
      </Text>

      <Button
        label="dark"
        colorScheme="dark"
        onClick={() => {
          handleOpenModal();
          console.log("clicked the button");
        }}
      />
      */}

      <Modal
        visible={isVisible}
        onClose={handleOnClose}
        title='hola que tal'
      >
        modal
      </Modal>

      <CreateEditContract onSubmit={onSubmit} />
    </BaseTemplate>
  )
}

export default Home
