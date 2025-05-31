import './Button.styles.scss'

interface Button {
  colorScheme: 'dark' | 'light'
  onClick?: () => void
}

const Button = ({ colorScheme, onClick }: Button) => {
  return (
    <button
      className={`${colorScheme}-button`}
      type='button'
      onClick={onClick ? onClick : undefined}
    >
      {colorScheme}
    </button>
  )
}

export default Button
