import { logoAsset } from '../assets/brand'

type LogoProps = {
  tone?: 'default' | 'inverse'
  className?: string
}

export function Logo({ tone = 'default', className = '' }: LogoProps) {
  const src = tone === 'inverse' ? logoAsset.inverseSrc : logoAsset.src
  const height = tone === 'inverse' ? 'h-11 sm:h-12' : 'h-9 sm:h-10'

  return (
    <img
      src={src}
      alt={logoAsset.alt}
      className={`${height} w-auto ${className}`}
      width={852}
      height={232}
    />
  )
}
