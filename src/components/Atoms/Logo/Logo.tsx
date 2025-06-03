const Logo = ({ className, width, height }: Partial<HTMLImageElement>) => {
  return (
    <img
      className={className}
      width={width}
      height={height}
      src='src/assets/estrateg-mailing-logo.png'
    />
  )
}

export default Logo
