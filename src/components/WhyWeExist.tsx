import { Container } from './Container'
import { Reveal } from './Reveal'

export function WhyWeExist() {
  return (
    <section id="why" aria-labelledby="why-heading" className="on-dark">
      <Container className="py-24 md:py-32 lg:py-40">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <h2
              id="why-heading"
              tabIndex={-1}
              className="text-[clamp(2rem,3.1vw,3rem)] font-semibold leading-tight tracking-[-0.03em] text-ink-inverse lg:col-span-7"
            >
              <span className="block">Healthcare has the data.</span>
              <span className="mt-2 block text-brand-accent">The gap is acting on it.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-inverse-soft sm:text-lg lg:col-span-5 lg:pb-1">
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
