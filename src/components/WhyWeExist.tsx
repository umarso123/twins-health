import { Container } from './Container'
import { Reveal } from './Reveal'

export function WhyWeExist() {
  return (
    <section id="why" aria-labelledby="why-heading" className="on-dark">
      <Container className="py-24 md:py-32 lg:py-40">
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <h2
              id="why-heading"
              tabIndex={-1}
              className="text-[clamp(2.6rem,5.4vw,5.35rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-ink-inverse lg:col-span-8"
            >
              <span className="block">Healthcare has the data.</span>
              <span className="mt-3 block text-brand-accent">The gap is acting on it.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-inverse-soft sm:text-lg lg:col-span-4 lg:pb-2">
              Most health systems already record and report a great deal. What's often missing is
              the next step: turning insight into coordinated action for the right patient at the
              right time. That's the gap we were built to close.
            </p>
          </div>
          <div className="mt-14 flex items-center gap-2.5 sm:mt-16" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-brand-accent opacity-35" />
            <span className="size-1.5 rounded-full bg-brand-accent opacity-55" />
            <span className="size-1.5 rounded-full bg-brand-accent opacity-75" />
            <span className="mx-1 h-px w-16 bg-brand-accent sm:w-36" />
            <span className="size-2.5 bg-brand-accent" />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
