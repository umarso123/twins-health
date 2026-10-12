import { Container } from './Container'
import { Reveal } from './Reveal'

// Temporary GHE 2026 campaign section — remove/hide after October 2026.
export function GHEBanner() {
  return (
    <section id="ghe" aria-labelledby="ghe-heading" className="on-dark">
      <Container className="py-8 md:py-10">
        <Reveal>
          <div
            className="border border-brand-accent px-6 py-5 sm:px-8 sm:py-6"
            style={{
              backgroundColor:
                'color-mix(in srgb, var(--brand-accent) 16%, var(--brand-primary-deep))',
            }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
              <h2
                id="ghe-heading"
                tabIndex={-1}
                className="shrink-0 text-2xl font-semibold tracking-[-0.03em] text-ink-inverse sm:text-3xl"
              >
                Meet us at GHE 2026
              </h2>
              <p className="text-base leading-relaxed text-ink-inverse md:border-l md:border-brand-accent md:pl-8 md:text-lg">
                <span className="font-medium text-brand-accent">26 to 29 October</span>
                <span> · Stand H1A.D21 · Riyadh Exhibition and Convention Center (Malham)</span>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
