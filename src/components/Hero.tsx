import { media } from '../assets/media'
import { contactHref, sanedHref } from '../data/navigation'
import { focusSectionHeading } from '../lib/focusSection'
import { ButtonLink } from './Button'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="overflow-x-clip bg-surface">
      <div className="grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex items-center">
          <Reveal className="w-full px-5 py-16 sm:px-6 sm:py-20 lg:py-24 lg:pr-12 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <p className="h-px w-10 bg-brand-accent" aria-hidden="true" />
            <h1
              id="hero-heading"
              tabIndex={-1}
              className="mt-8 text-[clamp(2.75rem,4.6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-ink"
            >
              Technology
              <span className="mt-1 block">that keeps care</span>
              <span className="mt-1 block text-brand-teal-deep">connected.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              twinshealth is a health technology company. Our integrated care platform, Saned
              Health, helps healthcare organizations plan, deliver and follow up on care.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={contactHref}
                className="w-full sm:w-auto"
                onClick={() => focusSectionHeading(contactHref)}
              >
                Talk to our team
              </ButtonLink>
              <ButtonLink
                href={sanedHref}
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => focusSectionHeading(sanedHref)}
              >
                Explore Saned Health
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative min-h-[26rem] sm:min-h-[34rem] lg:min-h-full">
          <div className="frame-reveal absolute inset-0">
            <img
              src={media.clinician}
              alt="A clinician in a white coat reviews a tablet outside a hospital."
              className="photo-settle h-full w-full object-cover object-[center_22%]"
              width={1200}
              height={1500}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
