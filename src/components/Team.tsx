import { team } from '../data/team'
import { Container } from './Container'
import { Reveal } from './Reveal'

export function Team() {
  return (
    <section id="team" aria-labelledby="team-heading" className="bg-surface">
      <Container className="py-20 md:py-28 lg:py-32">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.18em] text-brand-teal-deep uppercase">
            Our Team
          </p>
          <h2
            id="team-heading"
            tabIndex={-1}
            className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
          >
            The people behind twinshealth
          </h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 md:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:gap-x-7">
          {team.map((member) => (
            <li key={member.id}>
              <Reveal>
                <article>
                  <div className="aspect-square">
                    <img
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      className="h-full w-full object-contain object-bottom"
                      width={1080}
                      height={1080}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-ink sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{member.role}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
