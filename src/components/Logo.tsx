import { logoAsset } from '../assets/brand'

type LogoProps = {
  tone?: 'default' | 'inverse'
  className?: string
}

export function Logo({ tone = 'default', className = '' }: LogoProps) {
  if (logoAsset.src) {
    return (
      <img
        src={logoAsset.src}
        alt={logoAsset.alt}
        className={`h-8 w-auto ${className}`}
      />
    )
  }

  const color = tone === 'inverse' ? 'text-ink-inverse' : 'text-ink'

  return (
    <span className={`font-medium tracking-tight lowercase ${color} ${className}`}>
      {logoAsset.wordmark}
    </span>
  )
}
