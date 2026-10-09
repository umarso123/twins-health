import { media } from '../assets/media'
import { sanedHealthUrl } from '../data/site'
import { ButtonLink } from './Button'
import { Container } from './Container'
import { Reveal } from './Reveal'

const capabilities = [
  {
    title: 'Chronic disease management.',
    description: 'Individual care plans, remote monitoring and timely follow-up between visits.',
  },
  {
    title: 'Population health.',
    description: 'Find people at higher risk early and organise care around their needs.',
  },
  {
    title: 'Home and virtual care.',
    description: 'Remote assessments, virtual consultations and coordinated home visits.',
  },
  {
    title: 'Built to connect.',
    description: 'Works on top of existing clinical systems and integrates with national platforms.',
  },
]

export function SanedHealth() {
  return (
    <section id="saned" aria-labelledby="saned-heading" className="bg-surface">
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-medium tracking-[0.18em] text-brand-teal-deep uppercase">
              Our Product
            </p>
            <h2
              id="saned-heading"
              tabIndex={-1}
              className="mt-4 text-[clamp(2.75rem,5vw,4.75rem)] font-semibold tracking-[-0.04em] text-ink"
            >
              Saned Health
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Saned Health is our integrated care platform. It brings population health, chronic
              disease management, case management and home and virtual care into one place.
            </p>
            <div className="mt-8">
              <ButtonLink href={sanedHealthUrl} external>
                Visit sanedhealth.com
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative lg:col-span-7">
            <div className="grid grid-cols-12 items-end gap-3 sm:gap-5">
              <img
                src={media.watch}
                alt="A smartwatch showing the TwinHealth mark."
                className="col-span-5 w-full object-cover"
                width={800}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <img
                src={media.phone}
                alt="A phone showing the TwinHealth mark."
                className="col-span-7 w-full object-cover"
                width={900}
                height={1100}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-line sm:mt-20 lg:mt-24">
          {capabilities.map((capability, index) => (
            <li
              key={capability.title}
              className={`border-b border-line py-8 sm:py-10 ${
                index % 2 === 1 ? 'lg:ml-[18%] lg:w-[82%]' : 'lg:w-[86%]'
              }`}
            >
              <Reveal>
                <div className="grid gap-3 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <p className="text-sm font-medium tracking-[0.14em] text-brand-teal-deep sm:col-span-2">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:col-span-5 sm:text-2xl">
                    {capability.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-soft sm:col-span-5">
                    {capability.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
