import { Container } from './Container'
import { Reveal } from './Reveal'

const details = [
  '26 to 29 October',
  'Stand H1A.D21',
  'Riyadh Exhibition and Convention Center (Malham)',
]

// Temporary GHE 2026 campaign section — remove/hide after October 2026.
export function GHEBanner() {
  return (
    <section id="ghe" aria-labelledby="ghe-heading" className="on-dark">
      <Container className="border-l-2 border-brand-accent py-14 md:py-16">
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <h2
            id="ghe-heading"
            tabIndex={-1}
            className="max-w-sm text-3xl font-semibold tracking-[-0.03em] text-ink-inverse sm:text-4xl"
          >
            Meet us at GHE 2026
          </h2>
          <ul className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            {details.map((detail, index) => (
              <li
                key={detail}
                className={
                  index === 0
                    ? 'text-lg font-medium leading-snug text-brand-accent'
                    : 'text-sm leading-relaxed text-ink-inverse-soft'
                }
              >
                {detail}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
