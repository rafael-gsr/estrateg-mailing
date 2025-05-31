import { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import { ColorScheme } from '../../../types/themes'

import './Text.styles.scss'
import { Link, NavLink } from 'react-router'

type TextTypes = 'a' | 'span' | 'p' | 'routerLink' | 'routerNavLink'

type TextProps = {
  type: TextTypes
  href?: string
  onClick?: () => void
  className?: string
  style?: CSSProperties
  colorScheme: ColorScheme
} & PropsWithChildren

const Text = ({
  children,
  type,
  href,
  onClick,
  className,
  style,
  colorScheme,
}: TextProps) => {
  const texts: Record<TextTypes, ReactNode> = {
    a: (
      <a
        style={style}
        href={href}
        onClick={onClick}
        className={`${className ?? ''} ${colorScheme}-link`}
      >
        {children}
      </a>
    ),

    routerNavLink: (
      <NavLink
        to={href ?? ''}
        viewTransition
        className={`${className ?? ''} ${colorScheme}-link`}
      >
        {children}
      </NavLink>
    ),

    routerLink: (
      <Link
        to={href ?? ''}
        viewTransition
        className={`${className ?? ''} ${colorScheme}-link`}
      >
        {children}
      </Link>
    ),

    p: (
      <p
        className={`${className ?? ''} ${colorScheme}-text`}
        onClick={onClick}
        style={style}
      >
        {children}
      </p>
    ),

    span: (
      <span
        style={style}
        onClick={onClick}
        className={`${className ?? ''} ${colorScheme}-text`}
      >
        {children}
      </span>
    ),
  }

  return texts[type]
}

export default Text
