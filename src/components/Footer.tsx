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
      <span className="text-sm text-ink-inverse">
        {label}
        <span className="sr-only">, link not available yet</span>
      </span>
    )
  }

  const external = href.startsWith('http')

  return (
    <a
      href={href}
      className="text-sm text-ink-inverse underline-offset-4 hover:underline"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t-2 border-brand-accent bg-brand-primary-deep">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-ink-inverse">
          <Logo tone="inverse" className="text-base align-middle" /> by Obeikan
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <FooterItem label={link.label} href={link.href} />
              </li>
            ))}
            <li>
              {/* Arabic version is not available yet. Do not link to a placeholder page. */}
              <span className="text-sm text-ink-inverse-soft">
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
