import { media } from '../assets/media'
import { Container } from './Container'
import { Reveal } from './Reveal'

const audiences = [
  {
    label: 'Health clusters',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 20.5h17" />
        <path d="M5 20.5V11h4.5v9.5" />
        <path d="M9.75 20.5V6.5h4.5V20.5" />
        <path d="M14.5 20.5V13H19v7.5" />
      </svg>
    ),
  },
  {
    label: 'Primary care networks',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8.2 8.4 10.6 14.6M15.8 8.4 13.4 14.6M8.4 7h7.2" />
        <circle cx="6" cy="7" r="2.25" />
        <circle cx="18" cy="7" r="2.25" />
        <circle cx="12" cy="17" r="2.25" />
      </svg>
    ),
  },
  {
    label: 'Homecare operators',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6.5 10.2V20h11V10.2" />
        <path d="M10 20v-4.5h4V20" />
      </svg>
    ),
  },
  {
    label: 'Payers',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5 19 6.4v5.4c0 4.1-2.7 7-7 8.7-4.3-1.7-7-4.6-7-8.7V6.4L12 3.5z" />
      </svg>
    ),
  },
]

export function WhoWeWorkWith() {
  return (
    <section id="audiences" aria-labelledby="audiences-heading" className="bg-surface-muted">
      <Container className="py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <img
              src={media.skyline}
              alt="A man reviews a tablet with the Riyadh skyline behind him."
              className="h-auto w-full"
              width={1672}
              height={941}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="lg:col-span-7">
          <Reveal>
            <h2
              id="audiences-heading"
              tabIndex={-1}
              className="max-w-[10ch] text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
            >
              Who We Work With
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-8 lg:mt-10">
              {audiences.map((audience) => (
                <li
                  key={audience.label}
                  className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-4 border-t border-line py-5 last:border-b sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:py-6"
                >
                  <span className="text-brand-teal-deep">{audience.icon}</span>
                  <span className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {audience.label}
                  </span>
                </li>
              ))}
            </ul>
            {/* Client logo insertion area: add approved logos from src/assets/logos/ here. */}
            <div data-client-logos />
          </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
