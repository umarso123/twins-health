import type { MouseEventHandler, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-primary text-ink-inverse hover:bg-brand-primary-deep',
  secondary: 'border border-brand-primary bg-surface text-brand-primary hover:bg-surface-muted',
  accent: 'bg-brand-accent text-brand-primary-deep hover:bg-brand-accent-hover',
}

const base =
  'inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-semibold'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  )
}

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit'
  className?: string
  variant?: Variant
}

export function Button({
  children,
  type = 'button',
  className = '',
  variant = 'primary',
}: ButtonProps) {
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
