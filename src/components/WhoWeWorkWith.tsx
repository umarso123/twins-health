import { media } from '../assets/media'
import { Container } from './Container'
import { Reveal } from './Reveal'

const audiences = [
  'Health clusters',
  'Primary care networks',
  'Homecare operators',
  'Payers',
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
            <ol className="mt-8 lg:mt-10">
              {audiences.map((audience, index) => (
                <li
                  key={audience}
                  className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-baseline gap-4 border-t border-line py-5 last:border-b sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:py-6"
                >
                  <span className="text-sm font-medium tracking-[0.14em] text-brand-teal-deep">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {audience}
                  </span>
                </li>
              ))}
            </ol>
            {/* Client logo insertion area: add approved logos from src/assets/logos/ here. */}
            <div data-client-logos />
          </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
