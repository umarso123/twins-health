import { Container } from './Container'
import { Reveal } from './Reveal'

const participants = ['Providers.', 'Patients.', 'Payers.']

export function ConnectedEcosystem() {
  return (
    <section id="ecosystem" aria-labelledby="ecosystem-heading" className="bg-surface">
      <Container className="py-20 md:py-28 lg:py-36">
        <Reveal>
          <svg
            viewBox="0 0 1200 150"
            className="mb-8 hidden h-28 w-full text-brand-accent md:mb-2 md:block"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="care-path"
              d="M200 112C330 112 430 34 600 34C770 34 870 112 1000 112"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="200" cy="112" r="5" fill="currentColor" />
            <circle cx="600" cy="34" r="5" fill="currentColor" />
            <circle cx="1000" cy="112" r="5" fill="currentColor" />
          </svg>
          <h2
            id="ecosystem-heading"
            tabIndex={-1}
            className="grid gap-8 border-l border-brand-accent pl-6 text-[clamp(2.4rem,5vw,4.5rem)] font-semibold tracking-[-0.04em] text-ink md:grid-cols-3 md:gap-6 md:border-0 md:pl-0"
          >
            {participants.map((label, index) => (
              <span
                key={label}
                className={
                  index === 1 ? 'md:text-center' : index === 2 ? 'md:text-right' : undefined
                }
              >
                {label}
              </span>
            ))}
          </h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg md:mt-14 md:ml-[33%] md:max-w-md">
            When everyone involved in care works from one connected platform, care becomes clearer,
            faster and easier to follow.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
