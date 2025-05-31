import { PropsWithChildren, ReactNode } from 'react'
import './Title.styles.scss'
import { ColorScheme } from '../../../types/themes'

type TitleLevel = 1 | 2 | 3 | 4 | 5

type TitleProps = PropsWithChildren & {
  level: TitleLevel
  colorScheme: ColorScheme
}

const Title = ({ children, level, colorScheme }: TitleProps) => {
  const titleByLevel: Record<TitleLevel, ReactNode> = {
    1: <h1 className={`${colorScheme}-h1`}>{children}</h1>,
    2: <h2 className={`${colorScheme}-h2`}>{children}</h2>,
    3: <h3 className={`${colorScheme}-h3`}>{children}</h3>,
    4: <h4 className={`${colorScheme}-h4`}>{children}</h4>,
    5: <h5 className={`${colorScheme}-h5`}>{children}</h5>,
  }

  return titleByLevel[level]
}

export default Title
