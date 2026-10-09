import { media } from '../assets/media'
import { team } from '../data/team'
import { Reveal } from './Reveal'

export function Team() {
  return (
    <section id="team" aria-labelledby="team-heading" className="overflow-x-clip bg-surface-muted">
      <div className="grid items-stretch lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <Reveal className="relative min-h-[24rem] lg:min-h-[44rem]">
          <div className="frame-reveal h-full lg:absolute lg:inset-0">
            <img
              src={media.scrubs}
              alt="Navy clinical scrubs and a stethoscope, with the twinshealth wordmark on the sleeve."
              className="photo-settle h-full min-h-[24rem] w-full object-cover object-[center_20%] lg:min-h-0"
              width={1000}
              height={1400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <div className="flex items-center px-5 py-16 sm:px-6 md:py-24 lg:py-28 lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pl-16 xl:pl-20">
          <div className="w-full max-w-xl">
            <Reveal>
              <p className="text-sm font-medium tracking-[0.18em] text-brand-teal-deep uppercase">
                Our Team
              </p>
              <h2
                id="team-heading"
                tabIndex={-1}
                className="mt-4 max-w-[12ch] text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl"
              >
                The people behind twinshealth
              </h2>
            </Reveal>
            <ul className="mt-10">
              {team.map((member, index) => (
                <li key={member.id} className="border-t border-line last:border-b">
                  <Reveal delay={index * 40}>
                    <article className="grid items-center gap-4 py-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6 sm:py-6">
                      {member.imageSrc ? (
                        <img
                          src={member.imageSrc}
                          alt={member.imageAlt}
                          className="size-16 object-cover sm:size-20"
                          width={160}
                          height={160}
                        />
                      ) : null}
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{member.role}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
