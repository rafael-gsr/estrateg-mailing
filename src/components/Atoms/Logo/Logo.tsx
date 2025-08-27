import logo from '../../../assets/estrateg-mailing-logo.png'

const Logo = ({ className, width, height }: Partial<HTMLImageElement>) => {
  return (
    <img
      className={className}
      width={width}
      height={height}
      src={logo}
    />
  )
}

export default Logo
