import { useState } from 'react'

import Modal from '../../Molecules/Modal'

import Button from '../../Atoms/Button'
import Text from '../../Atoms/Text'
import Title from '../../Atoms/Title'
import BaseTemplate from '../../Templates/BaseTemplate/BaseTemplate'

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleOnClose = () => {
    setIsVisible(false)
  }

  const handleOpenModal = () => {
    setIsVisible(true)
  }

  return (
    <BaseTemplate>
      <Title
        colorScheme='light'
        level={1}
      >
        Home
      </Title>

      <Text
        type='routerLink'
        colorScheme='light'
        href='clients'
      >
        clients
      </Text>

      <Text
        type='p'
        colorScheme='light'
      >
        teste
      </Text>

      <Text
        type='routerLink'
        colorScheme='dark'
        href='dashboards'
      >
        dashboards
      </Text>

      <Button
        colorScheme='dark'
        onClick={() => {
          handleOpenModal()
          console.log('clicked the button')
        }}
      />

      <Modal
        visible={isVisible}
        onClose={handleOnClose}
        title='hola que tal'
      >
        modal
      </Modal>
    </BaseTemplate>
  )
}

export default Home
