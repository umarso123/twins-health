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
            <img
              src={media.virtualCare}
              alt="A clinician on a video call with a patient."
              className="h-auto w-full"
              width={863}
              height={575}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-line sm:mt-20 lg:mt-28">
          {capabilities.map((capability, index) => (
            <li key={capability.title} className="border-b border-line">
              <Reveal>
                <div className="grid gap-3 border-l-2 border-transparent py-8 pl-5 transition-colors hover:border-brand-accent hover:bg-surface-muted sm:grid-cols-[4.25rem_minmax(0,0.95fr)_minmax(0,1.05fr)] sm:items-baseline sm:gap-8 sm:py-11 sm:pl-6 lg:py-12">
                  <p className="text-sm font-medium tracking-[0.18em] text-brand-teal-deep">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {capability.title}
                  </h3>
                  <p className="max-w-md text-base leading-relaxed text-ink-soft">
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
