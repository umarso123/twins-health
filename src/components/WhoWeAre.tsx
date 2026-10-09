import { media } from '../assets/media'
import { Reveal } from './Reveal'

export function WhoWeAre() {
  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-x-clip bg-surface">
      <div className="grid items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <Reveal className="relative h-[26rem] sm:h-[34rem] lg:h-auto lg:min-h-[46rem]">
          <div className="frame-reveal absolute inset-0">
            <img
              src={media.family}
              alt="A father and two children look at a tablet together."
              className="photo-settle h-full w-full object-cover object-[center_30%]"
              width={1400}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src={media.elder}
            alt="An older man uses a tablet beside a window overlooking the Riyadh skyline."
            className="photo-inset absolute right-[7%] bottom-10 hidden aspect-[4/5] w-[46%] object-cover lg:block"
            width={900}
            height={1100}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <div className="flex items-center px-5 py-20 sm:px-6 md:py-28 lg:py-32 lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pl-16 xl:pl-24">
          <Reveal delay={80}>
            <h2
              id="about-heading"
              tabIndex={-1}
              className="text-sm font-medium tracking-[0.18em] text-brand-teal-deep uppercase"
            >
              Who We Are
            </h2>
            <p className="mt-6 max-w-xl text-2xl leading-snug font-medium tracking-tight text-ink sm:text-3xl sm:leading-snug">
              We are a health technology company and{' '}
              <span className="text-brand-teal-deep">part of Obeikan Investment Group</span>. We
              help health clusters, primary care networks and homecare operators unlock their
              digital potential, so care teams spend less time chasing information and more time
              on patients.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
