import { MouseEventHandler, PropsWithChildren } from 'react'
import './Modal.styles.scss'
import CloseIcon from '../../Atoms/CloseIcon'
import Title from '../../Atoms/Title'

type ModalProps = {
  visible: boolean
  onClose: () => void
  title?: string
} & PropsWithChildren

const Modal = ({ children, visible, onClose, title }: ModalProps) => {
  const handleOnClose = () => onClose()

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target == event.currentTarget) {
      handleOnClose()
      console.log('clicked outside')
    }
  }

  if (visible)
    return (
      <div
        className='modal'
        onClick={handleClickOutside}
      >
        <div className='modal__frame'>
          <CloseIcon onClick={handleOnClose} />

          <Title
            level={2}
            colorScheme='light'
          >
            {title}
          </Title>

          {children}
        </div>
      </div>
    )

  return <></>
}

export default Modal
