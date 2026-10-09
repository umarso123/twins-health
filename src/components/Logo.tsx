import { logoAsset } from '../assets/brand'

type LogoProps = {
  tone?: 'default' | 'inverse'
  className?: string
}

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 124" className={className} aria-hidden="true" fill="currentColor">
      <path d="M56 0h14a18 18 0 0 1 18 18v10a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8z" />
      <rect x="0" y="44" width="40" height="36" rx="8" />
      <rect x="48" y="44" width="40" height="36" rx="8" />
      <path d="M8 88h32v36H22A22 22 0 0 1 0 102V96a8 8 0 0 1 8-8z" />
      <rect x="48" y="88" width="40" height="36" rx="8" />
    </svg>
  )
}

export function Logo({ tone = 'default', className = '' }: LogoProps) {
  if (logoAsset.src) {
    return <img src={logoAsset.src} alt={logoAsset.alt} className={`h-8 w-auto ${className}`} />
  }

  const word = tone === 'inverse' ? 'text-ink-inverse' : 'text-ink'

  return (
    <span className={`inline-flex items-center gap-[0.45em] leading-none ${className}`}>
      <LogoMark className="h-[1.35em] w-auto shrink-0 text-brand-accent" />
      <span className={`font-medium tracking-tight lowercase ${word}`}>{logoAsset.wordmark}</span>
    </span>
  )
}
