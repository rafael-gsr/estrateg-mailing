import IcCloseIcon from '@mui/icons-material/Close'
import { CSSProperties } from 'react'
import './CloseIcon.styles.scss'

type CloseIconProps = {
  onClick?: () => void
  className?: string
  styles?: CSSProperties
  fillColor?: string
}

const CloseIcon = ({
  onClick,
  className,
  styles,
  fillColor = 'var(--light-text)',
}: CloseIconProps) => {
  return (
    <IcCloseIcon
      focusable='false'
      className={`close_icon ${className ?? ''}`}
      style={styles}
      onClick={onClick}
      sx={{ backgroundColorL: fillColor }}
    />
  )
}

export default CloseIcon
