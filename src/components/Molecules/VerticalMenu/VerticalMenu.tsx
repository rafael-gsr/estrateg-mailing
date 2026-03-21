import { useRef, useState } from 'react'
import './VerticalMenu.styles.scss'
import OptionsIcon from '@mui/icons-material/MoreVert'
import MenuPopup from '../MenuPopup'

const VerticalMenu = () => {
  const [open, setOpen] = useState<boolean | undefined>(undefined)
  const openRef = useRef<HTMLDivElement>(null)

  const observeClickEventHandler = (event: PointerEvent) => {
    const clickedElement = event.target as Node
    const clickedDivElement = openRef.current?.isSameNode(clickedElement)
    const clickedChildElement =
      openRef.current?.isSameNode(clickedElement.parentElement) ||
      openRef.current?.isSameNode(
        clickedElement.parentElement?.parentElement || null
      )

    const isClickingOutside = !(clickedDivElement || clickedChildElement)

    if (isClickingOutside) handleClose()
  }

  const handleOpen = () => {
    setOpen(true)
    window.addEventListener('click', observeClickEventHandler)
  }

  const handleClose = () => {
    setOpen((prev) => {
      if (prev) return false
      return prev
    })

    window.removeEventListener('click', observeClickEventHandler)
  }

  return (
    <div
      ref={openRef}
      className='actions'
      onClick={handleOpen}
    >
      <OptionsIcon
        className='actions__options'
        sx={{
          backgroundColorL: 'white',
          ':hover': {
            backgroundColorL: 'var(--variant-containedBg)',
          },
        }}
      />
      <MenuPopup state={open} />
    </div>
  )
}

export default VerticalMenu
