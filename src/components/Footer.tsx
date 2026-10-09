import { linkedInUrl, privacyPolicyUrl } from '../data/site'
import { Logo } from './Logo'

type FooterLink = {
  label: string
  href: string | null
}

const links: FooterLink[] = [
  { label: 'LinkedIn', href: linkedInUrl },
  { label: 'Privacy policy', href: privacyPolicyUrl },
]

function FooterItem({ label, href }: FooterLink) {
  if (!href) {
    return (
      <span className="text-sm tracking-wide text-ink-inverse">
        {label}
        <span className="sr-only">, link not available yet</span>
      </span>
    )
  }

  const external = href.startsWith('http')

  return (
    <a
      href={href}
      className="text-sm tracking-wide text-ink-inverse transition-colors hover:text-brand-accent"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-brand-primary-deep">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-16">
        <p className="text-ink-inverse">
          <Logo tone="inverse" className="text-2xl" />
          <span className="mt-3 block text-sm tracking-[0.08em] text-ink-inverse-soft">
            by Obeikan
          </span>
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <FooterItem label={link.label} href={link.href} />
              </li>
            ))}
            <li>
              {/* Arabic version is not available yet. Do not link to a placeholder page. */}
              <span className="text-sm tracking-wide text-ink-inverse-soft">
                Arabic
                <span className="sr-only">, not available yet</span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
